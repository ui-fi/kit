import React from 'react';

//type UiSizeVariant = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

// type ResponsiveContextProperties = {
//     variant: UiSizeVariant;
// };

//const context = React.createContext<ResponsiveContextProperties>({ variant: 'm' });

// type ResponsiveContainerProperties = {

// }

// class ResponsiveContext extends React.Component<ResponsiveContextProperties> {  
//     constructor(props: ResponsiveContextProperties) {
//         super(props);
//     }
    
//     public render(): React.ReactNode {
//         return (
//             <context.Provider value={{ variant: this.props.variant }}>
//                 { this.props.children }
//             </context.Provider>
//         );
//     }
// }

// class ResponsiveElement extends React.Component {
//     public render(): React.ReactNode {
//         return (
//             <context.Consumer>
//                 {
//                     (properties: ResponsiveContextProperties): React.ReactNode => {
                        
//                     }
//                 }
//             </context.Consumer>
//         );
//     }
// }

// export { ResponsiveContext, Provider as ResponsiveContextProvider, Consumer as ResponsiveContextConsumer };