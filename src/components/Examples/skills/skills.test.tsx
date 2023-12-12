import Skills from './index';
import { render, screen } from '@testing-library/react';

describe('Skills', () => {
  const skillsData = ["younes", "khalil", "amani"]; 

  it('renders Skills component', () => {
    render(<Skills skills={skillsData} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
 it ('renders a list of skills', () => {
    render(<Skills skills={skillsData} />);
    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(3);
 });
  
  it ('renders a button', () => {
      render(<Skills skills={skillsData} />);
  
      const loginButton = screen.getByRole('button', {name:"Login"});
      expect(loginButton).toBeInTheDocument();
  });
  it ('start learning not rendred', () => {
      render(<Skills skills={skillsData} />);
  
    const buttonElement = screen.queryByRole('button', {name:"start learning"});
    expect(buttonElement).not.toBeInTheDocument();
      
  });
  
});