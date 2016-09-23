class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}


declare var process: NodeProcess;


function PrintaTree (totalline: number) :void {
   var part : number = 0;
   var currentline : number = 0; 
   var floor : string = "";
   for( currentline = 0 ; currentline < totalline ; currentline++){
       floor = "";
       for(part = 0 ; part < totalline * 2 - 1 ; part++ ){
           if( part < totalline - 1 - currentline)
              floor += " ";
           if( part >= totalline - 1 - currentline && part <= totalline + currentline - 1 )
              floor += "*";
       }
       console.log(floor);
   }
   for(var rootline : number = 0; rootline < totalline / 2 ; rootline++ ){
       floor = "";
       for(var treepart : number = 0; treepart < totalline * 2 - 1; treepart++){
           if( treepart < totalline / 2)
              floor += " ";
           if( totalline <= 3){
           if( treepart >= totalline / 2 && treepart < totalline * 3 / 2 - 2)
              floor += "|"; 
           }
           if( totalline > 3 ){
                if( treepart >= totalline / 2 && treepart <= totalline * 3 / 2 - 2 )
              floor += "|"; 
             
           }

       }
       console.log(floor);
   }
  
}

declare class EventEmitter {
    addListener(event: string, listener: Function);
    on(event: string, listener: Function);
    once(event: string, listener: Function): void;
    removeListener(event: string, listener: Function): void;
    removeAllListeners(event: string): void;
    setMaxListeners(n: number): void;
    listeners(event: string): { Function; }[];
    emit(event: string, ...args: any[]): void;
}


declare class WritableStream extends EventEmitter {
    writable: boolean;
    write(str: string, encoding?: string, fd?: string): boolean;
    write(buffer: NodeBuffer): boolean;
    end(): void;
    end(str: string, enconding: string): void;
    end(buffer: NodeBuffer): void;
    destroy(): void;
    destroySoon(): void;
}

declare class ReadableStream extends EventEmitter {
    readable: boolean;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    destroy(): void;
    pipe(destination: WritableStream, options?: { end?: boolean; }): void;
}


interface NodeBuffer {
    [index: number]: number;
    write(string: string, offset?: number, length?: number, encoding?: string): number;
    toString(encoding?: string, start?: number, end?: number): string;
    length: number;
    copy(targetBuffer: NodeBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): void;
    slice(start?: number, end?: number): NodeBuffer;
    readUInt8(offset: number, noAsset?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    writeUInt8(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt8(value: number, offset: number, noAssert?: boolean): void;
    writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
    writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
    writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
    writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
    fill(value: any, offset?: number, end?: number): void;
    INSPECT_MAX_BYTES: number;
}


declare class NodeProcess extends EventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    env: any;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    getuid(): number;
    setuid(id: number): void;
    version: string;
    versions: { http_parser: string; node: string; v8: string; ares: string; uv: string; zlib: string; openssl: string; };
    config: {
        target_defaults: {
            cflags: any[];
            default_configuration: string;
            defines: string[];
            include_dirs: string[];
            libraries: string[];
        };
        variables: {
        clang: number;
        host_arch: string;
        node_install_npm: boolean;
        node_install_waf: boolean;
        node_prefix: string;
        node_shared_openssl: boolean;
        node_shared_v8: boolean;
        node_shared_zlib: boolean;
        node_use_dtrace: boolean;
        node_use_etw: boolean;
        node_use_openssl: boolean;
        target_arch: string;
        v8_no_strict_aliasing: number;
        v8_use_snapshot: boolean;
        visibility: string;
    };
    };
    kill(pid: number, signal?: string): void;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    memoryUsage(): { rss: number; heapTotal; number; heapUsed: number; };
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(): number[];
    hrtime(start: number[]): number[];
}




window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    PrintaTree(5);
};

PrintaTree(5);