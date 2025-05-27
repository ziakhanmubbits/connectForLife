import {colors}  from "../utilities/colors"
import  {appStyles}  from "../utilities/appStyles"


export const baseURL = ''
export const endPoints = {
    login: 'login',
    courses:'rooms',
    classes:'classes',
}
export const routes={
    auth:'auth',
    profile:'profile',
    app:'app',
    splash:'splash',
    signin:'signin',
    home:'home',
    onboarding:'onboarding',
    subscription:'subscription',
    createpass:'createpass',
    otpconfirmation:'otpconfirmation',
    forgotpass:'forgotpass',
    changepass:'changepass',
    createprofile:'createprofile',
    chooseinterests:'chooseinterests',
    addphotos:'addphotos',
    requests:'request',
    usermatches:'usermatches',
    chat:'chat'
}
export const headers = {
    screenOptions: {
          headerShown: false,
         title: 'Title',
         headerTitleAlign: 'left',
         headerStyle: [appStyles.headerStyle],
         headerTitleStyle: appStyles.headerTitleStyle,
         headerTintColor: colors.appTextColor4,
         headerBackTitle: ' '

    }
}
export const tabs = {
    tabBarOptions: {
        headerShown: false,
        showLabel: false,
        tabBarActiveTintColor: colors.appColor1,
        tabBarInactiveTintColor: colors.appBgColor3,
        allowFontScaling: true,
        tabBarStyle: appStyles.tabBarStyle,
        
        tabBarStyle: { borderRadius: 13, marginHorizontal: 7.5, marginVertical: 2,backgroundColor:'rgba(71, 31, 127, 0.4)' }
    },
}