import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes, headers } from '../../services';
import * as Auth from '../../screens/authFlow';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={headers.screenOptions}
            //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
            // initialRouteName={routes.signin}
            initialRouteName={routes.onboarding}
        >
             <AuthStack.Screen name={routes.onboarding} component={Auth.Onbaording}
                options={{
                headerShown: false,
                }}/>
            <AuthStack.Screen name={routes.signin} component={Auth.Signin}
                options={{
                    headerShown: false,
                    
                }}
            />
            <AuthStack.Screen name={routes.subscription} component={Auth.Subsription}
                options={{
                    headerShown: false,
                }}
            />
         <AuthStack.Screen name={routes.createpass} component={Auth.CreatePass}
                options={{
                    headerShown: false,
                }}
            />
              <AuthStack.Screen name={routes.otpconfirmation} component={Auth.OtpConfirmation}
                options={{
                    headerShown: false,
                }}
            />
             <AuthStack.Screen name={routes.forgotpass} component={Auth.ForgotPass}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen name={routes.changepass} component={Auth.ChangePass}
                options={{
                    headerShown: false,
                }}
            />
             <AuthStack.Screen name={routes.createprofile} component={Auth.CreateProfile}
                options={{
                    headerShown: false,
                }}
            />
              <AuthStack.Screen name={routes.chooseinterests} component={Auth.ChooseInterests}
                options={{
                    headerShown: false,
                }}
            />
             <AuthStack.Screen name={routes.addphotos} component={Auth.AddPhotos}
                options={{
                    headerShown: false,
                }}
            />
    
        </AuthStack.Navigator>
    )
}

export default AuthNavigation