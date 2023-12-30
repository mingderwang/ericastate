import React, { lazy, Suspense } from 'react';

const DelayedResponseComponent = lazy(() => import('./DelayedResponseComponent'));

export default function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DelayedResponseComponent />
      </Suspense>
    </div>
  );
}