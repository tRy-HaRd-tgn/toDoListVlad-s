import { describe, it, expect, beforeEach } from 'vitest';

import { useStore } from '@/shared';

const mokData = 'test';

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({ list: [{ id: mokData, name: mokData }] });
  });

  it('addItem', () => {
    useStore.getState().addItem(mokData);
    expect(useStore.getState().list.length).toBe(2);
  });

  it('resetAllTasks', () => {
    useStore.getState().reset();
    expect(useStore.getState().list).toEqual([]);
  });

  it('removeItem', () => {
    useStore.getState().removeItem(mokData);
    expect(useStore.getState().list.length).toBe(0);
  });
});
