const mntConfigurationErrorMessage = `
mnt was invoked with unacceptable configuration.
It can either accept a configuration object or be used as a function or a tagged template.
`;

export class MntConfigurationError extends TypeError {
  constructor(message: string = mntConfigurationErrorMessage) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = 'MntConfigurationError';
  }
}
