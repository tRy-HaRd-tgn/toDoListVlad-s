import { RenderResult, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

import { Input } from '@/shared';
const testIdMock = 'input';
const mokData = 'test';
const mokOnChange = () => {};
const renderTask = (): RenderResult =>
  render(
    <Input
      testId={testIdMock}
      value={mokData}
      onChange={mokOnChange}
      placeholder={mokData}
    />
  );

describe('Input', () => {
  beforeEach(renderTask);

  it('should render', async () => {
    expect(screen.getByTestId(`input-${testIdMock}`)).toBeInTheDocument();
  });
});
