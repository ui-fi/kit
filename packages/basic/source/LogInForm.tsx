// import React from 'react';

// import { Layout, LayoutSlot, LayoutProperties } from '@ui-fi/layouts';

// type LogInFormSlotId = 'header' | 'identity' | 'password' | 'controls' | 'footer';

// type LogInFormProperties = {
//     layout?: Layout<LogInFormSlotId>;
// }

// class DefaultLogInFormLayout extends React.Component<LayoutProperties<LogInFormSlotId>> {
//     render(): React.ReactNode {
//         return (
//             <div>
//                 { this._renderSlot('header') }
//                 <div className="log-in-form__body">
//                     <div className="log-in-form__body__input-section">
//                         { this._renderSlot('identity') }
//                         { this._renderSlot('password') }
//                     </div>
//                     <div className="log-in-form__body__control-section">
//                         { this._renderSlot('controls') }
//                     </div>
//                 </div>
//                 { this._renderSlot('footer') }
//             </div>
//         );
//     }

//     private _renderSlot(id: LogInFormSlotId): React.ReactNode {
//         return (
//             <div className={ `log-in-form__slot` } data-slot-id={ id }>
//                 <LayoutSlot id='footer' />
//             </div>
//         );
//     }
// }

// class LogInForm extends React.Component<LogInFormProperties> {
//     constructor(props: LogInFormProperties) {
//         super(props);
//     }

//     public render(): React.ReactNode {
//         return (
//             "LOG_IN_FORM"
//         );
//     }

//    // private _layout: Layout
// }

// export { LogInForm, DefaultLogInFormLayout, LogInFormSlotId };