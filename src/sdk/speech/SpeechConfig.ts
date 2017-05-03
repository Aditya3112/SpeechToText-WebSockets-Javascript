namespace Speech {
    export class SpeechConfig {
        private context: Context;

        constructor(context: Context) {
            this.context = context;
        }

        public Serialize = (): string => {
            return JSON.stringify(this, (key: any, value: any) : any => {
            if (value && typeof value === "object") {
                const replacement: any = {};
                for (const k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        replacement[k && k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                    }
                }
                return replacement;
            }
            return value;
            });
        }

        public get Context(): Context{
            return this.context;
        }

    }

    // tslint:disable-next-line:max-classes-per-file
    export class Context {
        private system: System;
        private os: OS;
        private device: Device;

        constructor(os: OS, device: Device) {
            this.system = new System();
            this.os = os;
            this.device = device;
        }

        public get System(): System {
            return this.system;
        }

        public get OS(): OS {
            return this.os;
        }

        public get Device(): Device {
            return this.device;
        }
    }

    // tslint:disable-next-line:max-classes-per-file
    export class System {
        private version: string;
        constructor() {
            // TODO: Tie this with the sdk Version somehow
            this.version = "1.0.00000";
        }
        public get Version(): string {
            // Controlled by sdk
            return this.version;
        }
    }

    // tslint:disable-next-line:max-classes-per-file
    export class OS {

        private platform: string;
        private name: string;
        private version: string;

        constructor(platform: string, name: string, version: string) {
            this.platform = platform;
            this.name = name;
            this.version = version;
        }

        public get Platform(): string {
            return this.platform;
        }

        public get Name(): string {
            return this.name;
        }

        public get Version(): string {
            return this.version;
        }
    }

    // tslint:disable-next-line:max-classes-per-file
    export class Device {

        private manufacturer: string;
        private model: string;
        private version: string;

        constructor(manufacturer: string, model: string, version: string) {
            this.manufacturer = manufacturer;
            this.model = model;
            this.version = version;
        }

        public get Manufacturer(): string {
            return this.manufacturer;
        }

        public get Model(): string {
            return this.model;
        }

        public get Version(): string {
            return this.version;
        }
    }
}
