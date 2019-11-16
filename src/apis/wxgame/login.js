import { UtilWxgameVary } from '../../utils/index.js';

export default function LoginFactory(
	defaultStyle = {
		left: 0,
		top: 0,
		width: 1000,
		height: 2000,
		backgroundColor: 'rgba(0,0,0,0)',
		borderColor: '#FFFFFF',
		borderWidth: 0,
		borderRadius: 0,
		textAlign: 'center',
		fontSize: 32,
		lineHeight: 32,
	},
) {
	//微信用户授权按钮监听
	let GetLoginButtonListen = function(UserInfoButton) {
		return new Promise((resolve, reject) => {
			UserInfoButton.offTap();
			UserInfoButton.onTap(resolve);
		}).then(res => {
			if (!res.userInfo) return GetLoginButtonListen(UserInfoButton);
			if (Login.GetUserInfo.Abort) Login.GetUserInfo.Abort();
			return res.userInfo;
		});
	};
	//微信用户授权按钮
	let GetLoginButton = function(infoStyle) {
		var UserInfoButton = wx.createUserInfoButton({
			type: 'text',
			text: '',
			style: Object.assign(defaultStyle, infoStyle),
			withCredentials: false,
			lang: 'zh_CN',
		});
		UserInfoButton.show();
		return UserInfoButton;
	};
	let openSetting = UtilWxgameVary('openSetting');
	let authorize = UtilWxgameVary('authorize');
	let getUserInfo = UtilWxgameVary('getUserInfo');
	let login = UtilWxgameVary('login');
	//打开权限设置界面
	let SetAuthorize = function(scope) {
		return openSetting()
			.then(res => (res.authSetting[scope] ? Promise.resolve() : Promise.reject()))
			.catch(() => SetAuthorize(scope));
	};

	//微信登陆
	let Login = function(info) {
		return login()
			.catch(err => {
				wx.showToast({ title: '登陆失败，请检查登陆状态', icon: 'none' });
				return Promise.reject(err);
			})
			.then(res => {
				if (!info) return res;
				return Login.GetUserInfo(info).then(user => {
					res.user = user;
					return res;
				});
			});
	};
	//获取用户信息
	Login.GetUserInfo = function(info) {
		return authorize('scope.userInfo', 'scope')
			.catch(() => {
				if (info === true) return SetAuthorize(scope);
				let Button = GetLoginButton(info);
				Login.GetUserInfo.Abort = function() {
					Button.hide();
					Button.destroy();
					delete Login.GetUserInfo.Abort;
				};
				return GetLoginButtonListen(Button);
			})
			.then(() => getUserInfo('zh_CN', 'lang'))
			.then(res => res.userInfo);
	};
	return Login;
}
