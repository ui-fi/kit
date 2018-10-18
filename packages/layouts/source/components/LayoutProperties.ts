import React from 'react';

type LayoutProperties<SI> = {
    elements: Partial<{ [P in keyof SI]: React.ReactNode }>;
}

export { LayoutProperties };