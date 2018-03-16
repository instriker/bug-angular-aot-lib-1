export * from './module/lib.module';

// BUG: The following export WON'T have the right .metadata.json exported:
export * from './components1';

// The following export will have the right .metadata.json exported:
export * from './components2/index';
