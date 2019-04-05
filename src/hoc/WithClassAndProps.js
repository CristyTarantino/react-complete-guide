import React from 'react';

const withClassAndProps = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  )
};

export default withClassAndProps;

// or

// import React, { Component} from 'react';
//
// const withClassAndProps = (WrappedComponent, className) => {
//   // anonymous class Factory
//   const NewWithClass = class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
//         </div>
//       )
//     }
//   };
//
//   return React.forwardRef((props, ref) => {
//     return <NewWithClass {...props} forwardedRef={ref} />
//   });
// };
//
// export default withClassAndProps;