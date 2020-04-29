
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders without crashing', () => {
    render(<TextInput readOnly />);
  });

  it('renders properly', () => {
    render(<TextInput data-testid="myInput" readOnly />);
    expect(screen.queryByTestId('myInput')).toBeTruthy();
  });

  it('is controlled component', () => {
    const { rerender } = render(
      <TextInput data-testid="myInput" value="" readOnly />
    );
    const input = screen.getByTestId('myInput') as HTMLInputElement;

    expect(input.value).toEqual('');

    rerender(
      <TextInput data-testid="myInput" value="changed value" readOnly />
    );

    expect(input.value).toEqual('changed value');
  });

  it('calls onChange', () => {
    let value = '';

    render(
      <TextInput
        data-testid="myInput"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          value = e.target.value;
        }}
      />
    );

    fireEvent.change(screen.getByTestId('myInput'), {
      target: { value: 'I changed the value' },
    });

    expect(value).toEqual('I changed the value');
  });

  it('does not render errors when not touched', () => {
    render(
      <TextInput
        data-testid="myInput"
        errorMessage="Something went wrong"
        readOnly
      />
    );

    expect(screen.queryByText('Something went wrong')).toBeFalsy();
  });

  it('renders errors when touched', () => {
    render(
      <TextInput
        data-testid="myInput"
        isTouched
        errorMessage="Something went wrong"
        readOnly
      />
    );

    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });

  it('renders a label', () => {
    render(
      <TextInput
        data-testid="myInput"
        name="username"
        label="username"
        readOnly
      />
    );

    expect(screen.getByLabelText('username')).toBeTruthy();
  });
});
