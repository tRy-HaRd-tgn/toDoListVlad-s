import { RenderResult, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

import { Button } from '@/shared';
const testIdMock = 'input';
const mokOnClick = () => {};
const mokData = 'test';
const renderTask = (): RenderResult =>
  render(
    <Button testId={testIdMock} onClick={mokOnClick}>
      {mokData}
    </Button>
  );

describe('Button', () => {
  beforeEach(renderTask);

  it('should render', async () => {
    expect(screen.getByTestId(`button-${testIdMock}`)).toBeInTheDocument();
  });
});
