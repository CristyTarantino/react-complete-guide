import React from 'react';

const newWithClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  )
};

export default newWithClass;


// or
//
// import React, { Component} from 'react';
//
// const newWithClass = (WrappedComponent, className) => {
//   anonymous class Factory
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props}/>
//         </div>
//       )
//     }
//   }
// };
//
// export default newWithClass;