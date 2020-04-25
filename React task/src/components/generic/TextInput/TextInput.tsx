import React, { Component } from 'react';
// eslint-disable-next-line import/no-duplicates
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line import/no-duplicates
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './TextInput.module.css';

type Props = React.ComponentProps<'input'> & {
  icon?: IconDefinition;
};
class TextInput extends Component<Props> {
  render() {
    const { icon, ...rest } = this.props;
    return (
      <div className={classes.container}>
        {icon && (
          <>
            <div className={classes.iconSeparator} />
            <FontAwesomeIcon icon={icon} />
          </>
        )}
        <input type='text' className={classes.input} {...rest} />
      </div>
    ); 
                

  }
}
export default TextInput;
