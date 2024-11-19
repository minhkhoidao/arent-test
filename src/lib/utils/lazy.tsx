import React, { Suspense } from "react";

export const lazyLoadComponent = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  LoadingComponent = null
) => {
  const LazyComponent = React.lazy(importFunc);

  return function LazyLoadWrapper(props: any) {
    return (
      <Suspense fallback={LoadingComponent || <div>Loading...</div>
      } >
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};