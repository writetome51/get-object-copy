export declare class TestClass {
    prop0: {
        propA: {
            propB: {
                propC: {
                    propD: string;
                };
            };
        };
    };
    prop1: number;
    prop2: number;
    doThis(): number;
}
export declare class TestSubclass extends TestClass {
    prop3: number;
}
export declare class TestSubSubclass extends TestSubclass {
}
