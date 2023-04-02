import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
	avatar: string
	name: string
	description: string
}

export interface UserState {
	userInfo: UserInfo
}

export function defaultSetting(): UserState {
	return {
		userInfo: {
			avatar: 'https://images.it1997.com/oneblog/20230401203337737.jpg',
			name: 'xcChen',
			description: 'build by <a href="https://www.it1997.com" class="text-blue-500" target="_blank" >小陈没烦恼</a>',
		},
	}
}

export function getLocalState(): UserState {
	const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
	return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
	ss.set(LOCAL_NAME, setting)
}
