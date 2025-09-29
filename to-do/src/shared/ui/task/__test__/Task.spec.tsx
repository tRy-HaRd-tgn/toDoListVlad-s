import { RenderResult, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

import { Task } from '@/shared';
const testIdMock = 'test';
const mokData = 'test';
const renderTask = (): RenderResult =>
  render(<Task testId={testIdMock}>{mokData}</Task>);

describe('Task', () => {
  beforeEach(renderTask);

  it('should render', async () => {
    expect(screen.getByTestId(`list-item-${testIdMock}`)).toBeInTheDocument();
  });
});
