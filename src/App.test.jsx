import { describe, test, it, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App.jsx';


test('renders', function () {
  render(<App />);

});
