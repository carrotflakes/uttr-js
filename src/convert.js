function $plus(x, y) {
    if (x instanceof Array && y instanceof Array)
        return x.concat(y);
    return x + y;
}
function $equal(x, y) {
    if (x instanceof Array) {
        if (y instanceof Array && x.length === y.length) {
            for (const i in x) {
                if (!$equal(x[i], y[i]))
                    return false;
            }
            return true;
        } else {
            return false;
        }
    } else if (typeof x === 'object') {
        if (typeof y === 'object' && !(y instanceof Array) && $equal(Object.keys(x), Object.keys(y))) {
            for (const key of Object.keys(x)) {
                if (!$equal(x[key], y[key]))
                    return false;
            }
            return true;
        } else {
            return false;
        }
    }
    return x === y;
}
function str(x) {
    return '' + x;
}
function json(x) {
    return JSON.stringify(x);
}
function items(x) {
    return Object.entries(x);
}
function typeOf(x) {
    if (x instanceof Array)
        return 'list';
    if (x === null)
        return 'null';
    const type = typeof x;
    if (type === 'function')
        return 'closure';
    return type;
}
var $tmp;
($tmp = [
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: '$plus'
        },
        params: [
            {
                type: 'Identifier',
                name: 'x'
            },
            {
                type: 'Identifier',
                name: 'y'
            }
        ],
        body: {
            type: 'BlockStatement',
            body: [
                {
                    type: 'IfStatement',
                    test: {
                        type: 'LogicalExpression',
                        operator: '&&',
                        left: {
                            type: 'BinaryExpression',
                            operator: 'instanceof',
                            left: {
                                type: 'Identifier',
                                name: 'x'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'Array'
                            }
                        },
                        right: {
                            type: 'BinaryExpression',
                            operator: 'instanceof',
                            left: {
                                type: 'Identifier',
                                name: 'y'
                            },
                            right: {
                                type: 'Identifier',
                                name: 'Array'
                            }
                        }
                    },
                    consequent: {
                        type: 'ReturnStatement',
                        argument: {
                            type: 'CallExpression',
                            callee: {
                                type: 'MemberExpression',
                                computed: false,
                                object: {
                                    type: 'Identifier',
                                    name: 'x'
                                },
                                property: {
                                    type: 'Identifier',
                                    name: 'concat'
                                }
                            },
                            arguments: [{
                                    type: 'Identifier',
                                    name: 'y'
                                }]
                        }
                    },
                    alternate: null
                },
                {
                    type: 'ReturnStatement',
                    argument: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'Identifier',
                            name: 'x'
                        },
                        right: {
                            type: 'Identifier',
                            name: 'y'
                        }
                    }
                }
            ]
        },
        generator: false,
        expression: false,
        async: false
    },
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: '$equal'
        },
        params: [
            {
                type: 'Identifier',
                name: 'x'
            },
            {
                type: 'Identifier',
                name: 'y'
            }
        ],
        body: {
            type: 'BlockStatement',
            body: [
                {
                    type: 'IfStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: 'instanceof',
                        left: {
                            type: 'Identifier',
                            name: 'x'
                        },
                        right: {
                            type: 'Identifier',
                            name: 'Array'
                        }
                    },
                    consequent: {
                        type: 'BlockStatement',
                        body: [{
                                type: 'IfStatement',
                                test: {
                                    type: 'LogicalExpression',
                                    operator: '&&',
                                    left: {
                                        type: 'BinaryExpression',
                                        operator: 'instanceof',
                                        left: {
                                            type: 'Identifier',
                                            name: 'y'
                                        },
                                        right: {
                                            type: 'Identifier',
                                            name: 'Array'
                                        }
                                    },
                                    right: {
                                        type: 'BinaryExpression',
                                        operator: '===',
                                        left: {
                                            type: 'MemberExpression',
                                            computed: false,
                                            object: {
                                                type: 'Identifier',
                                                name: 'x'
                                            },
                                            property: {
                                                type: 'Identifier',
                                                name: 'length'
                                            }
                                        },
                                        right: {
                                            type: 'MemberExpression',
                                            computed: false,
                                            object: {
                                                type: 'Identifier',
                                                name: 'y'
                                            },
                                            property: {
                                                type: 'Identifier',
                                                name: 'length'
                                            }
                                        }
                                    }
                                },
                                consequent: {
                                    type: 'BlockStatement',
                                    body: [
                                        {
                                            type: 'ForInStatement',
                                            left: {
                                                type: 'VariableDeclaration',
                                                declarations: [{
                                                        type: 'VariableDeclarator',
                                                        id: {
                                                            type: 'Identifier',
                                                            name: 'i'
                                                        },
                                                        init: null
                                                    }],
                                                kind: 'const'
                                            },
                                            right: {
                                                type: 'Identifier',
                                                name: 'x'
                                            },
                                            body: {
                                                type: 'BlockStatement',
                                                body: [{
                                                        type: 'IfStatement',
                                                        test: {
                                                            type: 'UnaryExpression',
                                                            operator: '!',
                                                            argument: {
                                                                type: 'CallExpression',
                                                                callee: {
                                                                    type: 'Identifier',
                                                                    name: '$equal'
                                                                },
                                                                arguments: [
                                                                    {
                                                                        type: 'MemberExpression',
                                                                        computed: true,
                                                                        object: {
                                                                            type: 'Identifier',
                                                                            name: 'x'
                                                                        },
                                                                        property: {
                                                                            type: 'Identifier',
                                                                            name: 'i'
                                                                        }
                                                                    },
                                                                    {
                                                                        type: 'MemberExpression',
                                                                        computed: true,
                                                                        object: {
                                                                            type: 'Identifier',
                                                                            name: 'y'
                                                                        },
                                                                        property: {
                                                                            type: 'Identifier',
                                                                            name: 'i'
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            prefix: true
                                                        },
                                                        consequent: {
                                                            type: 'ReturnStatement',
                                                            argument: {
                                                                type: 'Literal',
                                                                value: false,
                                                                raw: 'false'
                                                            }
                                                        },
                                                        alternate: null
                                                    }]
                                            },
                                            each: false
                                        },
                                        {
                                            type: 'ReturnStatement',
                                            argument: {
                                                type: 'Literal',
                                                value: true,
                                                raw: 'true'
                                            }
                                        }
                                    ]
                                },
                                alternate: {
                                    type: 'BlockStatement',
                                    body: [{
                                            type: 'ReturnStatement',
                                            argument: {
                                                type: 'Literal',
                                                value: false,
                                                raw: 'false'
                                            }
                                        }]
                                }
                            }]
                    },
                    alternate: {
                        type: 'IfStatement',
                        test: {
                            type: 'BinaryExpression',
                            operator: '===',
                            left: {
                                type: 'UnaryExpression',
                                operator: 'typeof',
                                argument: {
                                    type: 'Identifier',
                                    name: 'x'
                                },
                                prefix: true
                            },
                            right: {
                                type: 'Literal',
                                value: 'object',
                                raw: '\'object\''
                            }
                        },
                        consequent: {
                            type: 'BlockStatement',
                            body: [{
                                    type: 'IfStatement',
                                    test: {
                                        type: 'LogicalExpression',
                                        operator: '&&',
                                        left: {
                                            type: 'LogicalExpression',
                                            operator: '&&',
                                            left: {
                                                type: 'BinaryExpression',
                                                operator: '===',
                                                left: {
                                                    type: 'UnaryExpression',
                                                    operator: 'typeof',
                                                    argument: {
                                                        type: 'Identifier',
                                                        name: 'y'
                                                    },
                                                    prefix: true
                                                },
                                                right: {
                                                    type: 'Literal',
                                                    value: 'object',
                                                    raw: '\'object\''
                                                }
                                            },
                                            right: {
                                                type: 'UnaryExpression',
                                                operator: '!',
                                                argument: {
                                                    type: 'BinaryExpression',
                                                    operator: 'instanceof',
                                                    left: {
                                                        type: 'Identifier',
                                                        name: 'y'
                                                    },
                                                    right: {
                                                        type: 'Identifier',
                                                        name: 'Array'
                                                    }
                                                },
                                                prefix: true
                                            }
                                        },
                                        right: {
                                            type: 'CallExpression',
                                            callee: {
                                                type: 'Identifier',
                                                name: '$equal'
                                            },
                                            arguments: [
                                                {
                                                    type: 'CallExpression',
                                                    callee: {
                                                        type: 'MemberExpression',
                                                        computed: false,
                                                        object: {
                                                            type: 'Identifier',
                                                            name: 'Object'
                                                        },
                                                        property: {
                                                            type: 'Identifier',
                                                            name: 'keys'
                                                        }
                                                    },
                                                    arguments: [{
                                                            type: 'Identifier',
                                                            name: 'x'
                                                        }]
                                                },
                                                {
                                                    type: 'CallExpression',
                                                    callee: {
                                                        type: 'MemberExpression',
                                                        computed: false,
                                                        object: {
                                                            type: 'Identifier',
                                                            name: 'Object'
                                                        },
                                                        property: {
                                                            type: 'Identifier',
                                                            name: 'keys'
                                                        }
                                                    },
                                                    arguments: [{
                                                            type: 'Identifier',
                                                            name: 'y'
                                                        }]
                                                }
                                            ]
                                        }
                                    },
                                    consequent: {
                                        type: 'BlockStatement',
                                        body: [
                                            {
                                                type: 'ForOfStatement',
                                                left: {
                                                    type: 'VariableDeclaration',
                                                    declarations: [{
                                                            type: 'VariableDeclarator',
                                                            id: {
                                                                type: 'Identifier',
                                                                name: 'key'
                                                            },
                                                            init: null
                                                        }],
                                                    kind: 'const'
                                                },
                                                right: {
                                                    type: 'CallExpression',
                                                    callee: {
                                                        type: 'MemberExpression',
                                                        computed: false,
                                                        object: {
                                                            type: 'Identifier',
                                                            name: 'Object'
                                                        },
                                                        property: {
                                                            type: 'Identifier',
                                                            name: 'keys'
                                                        }
                                                    },
                                                    arguments: [{
                                                            type: 'Identifier',
                                                            name: 'x'
                                                        }]
                                                },
                                                body: {
                                                    type: 'BlockStatement',
                                                    body: [{
                                                            type: 'IfStatement',
                                                            test: {
                                                                type: 'UnaryExpression',
                                                                operator: '!',
                                                                argument: {
                                                                    type: 'CallExpression',
                                                                    callee: {
                                                                        type: 'Identifier',
                                                                        name: '$equal'
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: {
                                                                                type: 'Identifier',
                                                                                name: 'x'
                                                                            },
                                                                            property: {
                                                                                type: 'Identifier',
                                                                                name: 'key'
                                                                            }
                                                                        },
                                                                        {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: {
                                                                                type: 'Identifier',
                                                                                name: 'y'
                                                                            },
                                                                            property: {
                                                                                type: 'Identifier',
                                                                                name: 'key'
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                prefix: true
                                                            },
                                                            consequent: {
                                                                type: 'ReturnStatement',
                                                                argument: {
                                                                    type: 'Literal',
                                                                    value: false,
                                                                    raw: 'false'
                                                                }
                                                            },
                                                            alternate: null
                                                        }]
                                                }
                                            },
                                            {
                                                type: 'ReturnStatement',
                                                argument: {
                                                    type: 'Literal',
                                                    value: true,
                                                    raw: 'true'
                                                }
                                            }
                                        ]
                                    },
                                    alternate: {
                                        type: 'BlockStatement',
                                        body: [{
                                                type: 'ReturnStatement',
                                                argument: {
                                                    type: 'Literal',
                                                    value: false,
                                                    raw: 'false'
                                                }
                                            }]
                                    }
                                }]
                        },
                        alternate: null
                    }
                },
                {
                    type: 'ReturnStatement',
                    argument: {
                        type: 'BinaryExpression',
                        operator: '===',
                        left: {
                            type: 'Identifier',
                            name: 'x'
                        },
                        right: {
                            type: 'Identifier',
                            name: 'y'
                        }
                    }
                }
            ]
        },
        generator: false,
        expression: false,
        async: false
    },
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: 'str'
        },
        params: [{
                type: 'Identifier',
                name: 'x'
            }],
        body: {
            type: 'BlockStatement',
            body: [{
                    type: 'ReturnStatement',
                    argument: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'Literal',
                            value: '',
                            raw: '\'\''
                        },
                        right: {
                            type: 'Identifier',
                            name: 'x'
                        }
                    }
                }]
        },
        generator: false,
        expression: false,
        async: false
    },
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: 'json'
        },
        params: [{
                type: 'Identifier',
                name: 'x'
            }],
        body: {
            type: 'BlockStatement',
            body: [{
                    type: 'ReturnStatement',
                    argument: {
                        type: 'CallExpression',
                        callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                                type: 'Identifier',
                                name: 'JSON'
                            },
                            property: {
                                type: 'Identifier',
                                name: 'stringify'
                            }
                        },
                        arguments: [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                    }
                }]
        },
        generator: false,
        expression: false,
        async: false
    },
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: 'items'
        },
        params: [{
                type: 'Identifier',
                name: 'x'
            }],
        body: {
            type: 'BlockStatement',
            body: [{
                    type: 'ReturnStatement',
                    argument: {
                        type: 'CallExpression',
                        callee: {
                            type: 'MemberExpression',
                            computed: false,
                            object: {
                                type: 'Identifier',
                                name: 'Object'
                            },
                            property: {
                                type: 'Identifier',
                                name: 'entries'
                            }
                        },
                        arguments: [{
                                type: 'Identifier',
                                name: 'x'
                            }]
                    }
                }]
        },
        generator: false,
        expression: false,
        async: false
    },
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: 'typeOf'
        },
        params: [{
                type: 'Identifier',
                name: 'x'
            }],
        body: {
            type: 'BlockStatement',
            body: [
                {
                    type: 'IfStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: 'instanceof',
                        left: {
                            type: 'Identifier',
                            name: 'x'
                        },
                        right: {
                            type: 'Identifier',
                            name: 'Array'
                        }
                    },
                    consequent: {
                        type: 'ReturnStatement',
                        argument: {
                            type: 'Literal',
                            value: 'list',
                            raw: '\'list\''
                        }
                    },
                    alternate: null
                },
                {
                    type: 'IfStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: '===',
                        left: {
                            type: 'Identifier',
                            name: 'x'
                        },
                        right: {
                            type: 'Literal',
                            value: null,
                            raw: 'null'
                        }
                    },
                    consequent: {
                        type: 'ReturnStatement',
                        argument: {
                            type: 'Literal',
                            value: 'null',
                            raw: '\'null\''
                        }
                    },
                    alternate: null
                },
                {
                    type: 'VariableDeclaration',
                    declarations: [{
                            type: 'VariableDeclarator',
                            id: {
                                type: 'Identifier',
                                name: 'type'
                            },
                            init: {
                                type: 'UnaryExpression',
                                operator: 'typeof',
                                argument: {
                                    type: 'Identifier',
                                    name: 'x'
                                },
                                prefix: true
                            }
                        }],
                    kind: 'const'
                },
                {
                    type: 'IfStatement',
                    test: {
                        type: 'BinaryExpression',
                        operator: '===',
                        left: {
                            type: 'Identifier',
                            name: 'type'
                        },
                        right: {
                            type: 'Literal',
                            value: 'function',
                            raw: '\'function\''
                        }
                    },
                    consequent: {
                        type: 'ReturnStatement',
                        argument: {
                            type: 'Literal',
                            value: 'closure',
                            raw: '\'closure\''
                        }
                    },
                    alternate: null
                },
                {
                    type: 'ReturnStatement',
                    argument: {
                        type: 'Identifier',
                        name: 'type'
                    }
                }
            ]
        },
        generator: false,
        expression: false,
        async: false
    }
])
const preDefinitions = $tmp;
function postDefinitions() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const xs = $0;
        return [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                            type: 'Identifier',
                            name: 'module'
                        },
                        property: {
                            type: 'Identifier',
                            name: 'exports'
                        }
                    },
                    right: {
                        type: 'ObjectExpression',
                        properties: map(function () {
                            try {
                                if (arguments.length !== 1)
                                    throw new Error('backtrack');
                                const $0 = arguments[0];
                                const x = $0;
                                return {
                                    type: 'Property',
                                    key: {
                                        type: 'Identifier',
                                        name: x
                                    },
                                    computed: false,
                                    value: {
                                        type: 'Identifier',
                                        name: x
                                    },
                                    kind: 'init',
                                    method: false,
                                    shorthand: true
                                };
                            } catch (e) {
                                if (e.message !== 'backtrack')
                                    throw e;
                            }
                        }, xs)
                    }
                }
            }];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function main() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const statements = $0;
        $tmp = (nub(concat(map(function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'functionDefinition')))
                    throw new Error('backtrack');
                const identifier = $0['identifier'];
                return [identifier];
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'constantDefinition')))
                    throw new Error('backtrack');
                const pattern = $0['pattern'];
                return map(function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        const x = $0;
                        return x[0];
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }, patternDestructure(pattern, null)['bindings']);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, map(function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array)))
                    throw new Error('backtrack');
                const value = $0['value'];
                return value;
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, statements)))))
        const exportsVariables = $tmp;
        return {
            type: 'Program',
            body: $plus($plus($plus(preDefinitions, [varDecl([[
                        '$tmp',
                        null
                    ]])]), concat(map(statement2body, statements))), postDefinitions(exportsVariables)),
            sourceType: 'script'
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function statement2body() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'definitionStatement')))
            throw new Error('backtrack');
        const value = $0['value'];
        return definition2body(value);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function definition2body() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'functionDefinition')))
            throw new Error('backtrack');
        const name = $0['identifier'], block = $0['block'];
        return [function_(identifier(name), functionBlock(block))];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'constantDefinition')))
            throw new Error('backtrack');
        const pattern = $0['pattern'], expression = $0['expression'];
        return $plus([assignExpr(identifier('$tmp'), expression2expression(expression))], pattern2body(pattern, identifier('$tmp')));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function functionBlock() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const xs = $0;
        return blockStat(map(function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array)))
                    throw new Error('backtrack');
                const patterns = $0['patterns'], guardClausesOrBody = $0['guardClausesOrBody'], whereClause = $0['whereClause'];
                return backtrackable($plus($plus($plus([ifStat(binaryExpr('!==', dotMemberExpr(identifier('arguments'), identifier('length')), literal(length(patterns))), failedStat())], variableDecls(map(function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        const i = $0;
                        return [
                            $plus('$', str(i)),
                            memberExpr(identifier('arguments'), literal(i))
                        ];
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }, range(length(patterns))))), concat($plus(map(function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        if (!($0 instanceof Array && $0.length === 2))
                            throw new Error('backtrack');
                        const i = $0[0], p = $0[1];
                        return pattern2body(p, identifier($plus('$', str(i))));
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }, enumerate(patterns)), map(definition2body, whereClause)))), function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'body')))
                            throw new Error('backtrack');
                        const value = $0['value'];
                        return [returnStat(expression2expression(value))];
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'guardClauses')))
                            throw new Error('backtrack');
                        const value = $0['value'];
                        return map(function () {
                            try {
                                if (arguments.length !== 1)
                                    throw new Error('backtrack');
                                const $0 = arguments[0];
                                if (!($0 instanceof Object && !($0 instanceof Array)))
                                    throw new Error('backtrack');
                                const guard = $0['guard'], body = $0['body'];
                                return ifStat(expression2expression(guard), returnStat(expression2expression(body)));
                            } catch (e) {
                                if (e.message !== 'backtrack')
                                    throw e;
                            }
                        }, value);
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }(guardClausesOrBody)));
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, xs));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function pattern2body() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const pattern = $0;
        const indicator = $1;
        $tmp = (patternDestructure(pattern, indicator))
        if (!($tmp instanceof Object && !($tmp instanceof Array)))
            throw new Error('backtrack');
        const conditions = $tmp['conditions'], bindings = $tmp['bindings'];
        return $plus(function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Array && $0.length === 0))
                    throw new Error('backtrack');
                return [];
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                return [ifStat(notExpr(andExpr(conditions)), failedStat())];
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }(conditions), variableDecls(bindings));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function patternDestructure() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const pattern = $0;
        const indicator = $1;
        function merge() {
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                if (!($0 instanceof Object && !($0 instanceof Array)))
                    throw new Error('backtrack');
                const c1 = $0['conditions'], b1 = $0['bindings'];
                if (!($1 instanceof Object && !($1 instanceof Array)))
                    throw new Error('backtrack');
                const c2 = $1['conditions'], b2 = $1['bindings'];
                return {
                    conditions: $plus(c1, c2),
                    bindings: $plus(b1, b2)
                };
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }
        return function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'valueExpression')))
                    throw new Error('backtrack');
                const value = $0['value'];
                return {
                    conditions: [callExpr(identifier('$equal'), [
                            indicator,
                            value2expression(value)
                        ])],
                    bindings: []
                };
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'variableExpression')))
                    throw new Error('backtrack');
                const identifier = $0['identifier'];
                return {
                    conditions: [],
                    bindings: function () {
                        try {
                            if (arguments.length !== 1)
                                throw new Error('backtrack');
                            const $0 = arguments[0];
                            if (!$equal($0, '_'))
                                throw new Error('backtrack');
                            return [];
                        } catch (e) {
                            if (e.message !== 'backtrack')
                                throw e;
                        }
                        try {
                            if (arguments.length !== 1)
                                throw new Error('backtrack');
                            const $0 = arguments[0];
                            return [[
                                    identifier,
                                    indicator
                                ]];
                        } catch (e) {
                            if (e.message !== 'backtrack')
                                throw e;
                        }
                    }(identifier)
                };
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'listExpression')))
                    throw new Error('backtrack');
                const value = $0['value'];
                return foldl(merge, [{
                        conditions: [
                            binaryExpr('instanceof', indicator, identifier('Array')),
                            binaryExpr('===', dotMemberExpr(indicator, identifier('length')), literal(length(value)))
                        ],
                        bindings: []
                    }].concat(map(function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        if (!($0 instanceof Array && $0.length === 2))
                            throw new Error('backtrack');
                        const i = $0[0], v = $0[1];
                        return patternDestructure(v, memberExpr(indicator, literal(i)));
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }, enumerate(value))));
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'objectExpression')))
                    throw new Error('backtrack');
                const members = $0['members'];
                return foldl(merge, [{
                        conditions: [andExpr([
                                binaryExpr('instanceof', indicator, identifier('Object')),
                                notExpr(binaryExpr('instanceof', indicator, identifier('Array')))
                            ])],
                        bindings: []
                    }].concat(map(function () {
                    try {
                        if (arguments.length !== 1)
                            throw new Error('backtrack');
                        const $0 = arguments[0];
                        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'propertyMember')))
                            throw new Error('backtrack');
                        const name = $0['identifier'], value = $0['value'];
                        return patternDestructure(value, memberExpr(indicator, literal(name)));
                    } catch (e) {
                        if (e.message !== 'backtrack')
                            throw e;
                    }
                }, members)));
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'consExpression')))
                    throw new Error('backtrack');
                const car = $0['car'], cdr = $0['cdr'];
                return foldl(merge, [
                    {
                        conditions: [andExpr([
                                binaryExpr('instanceof', indicator, identifier('Array')),
                                binaryExpr('>=', dotMemberExpr(indicator, identifier('length')), literal(1))
                            ])],
                        bindings: []
                    },
                    patternDestructure(car, memberExpr(indicator, literal(0))),
                    patternDestructure(cdr, callExpr(dotMemberExpr(indicator, identifier('slice')), [literal(1)]))
                ]);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'atPattern')))
                    throw new Error('backtrack');
                const left = $0['left'], right = $0['right'];
                return merge(patternDestructure(left, indicator), patternDestructure(right, indicator));
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }(pattern);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function value2expression() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'numberValue')))
            throw new Error('backtrack');
        const value = $0['value'];
        return literal(value);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'stringValue')))
            throw new Error('backtrack');
        const value = $0['value'];
        return literal(value);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'boolValue')))
            throw new Error('backtrack');
        const value = $0['value'];
        return literal(value);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'nullValue')))
            throw new Error('backtrack');
        return literal(null);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function expression2expression() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'valueExpression')))
            throw new Error('backtrack');
        const value = $0['value'];
        return value2expression(value);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'variableExpression')))
            throw new Error('backtrack');
        const name = $0['identifier'];
        return identifier(name);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'applyExpression')))
            throw new Error('backtrack');
        const operator = $0['operator'], args = $0['args'];
        if ($equal(typeOf(operator), 'object'))
            return {
                type: 'CallExpression',
                callee: expression2expression(operator),
                arguments: map(expression2expression, args)
            };
        if ($equal(operator, '+'))
            return {
                type: 'CallExpression',
                callee: identifier('$plus'),
                arguments: map(expression2expression, args)
            };
        if ($equal(operator, '=='))
            return {
                type: 'CallExpression',
                callee: identifier('$equal'),
                arguments: map(expression2expression, args)
            };
        if ($equal(operator, '!='))
            return notExpr({
                type: 'CallExpression',
                callee: identifier('$equal'),
                arguments: map(expression2expression, args)
            });
        if (elem(operator, [
                '-',
                '*',
                '/',
                '%',
                '<',
                '>',
                '<=',
                '>='
            ]))
            return binaryExpr(operator, expression2expression(args[0]), expression2expression(args[1]));
        if (elem(operator, [
                '&&',
                '||'
            ]))
            return logicalExpr(operator, expression2expression(args[0]), expression2expression(args[1]));
        if ($equal(operator, '[]'))
            return memberExpr(expression2expression(args[0]), expression2expression(args[1]));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'listExpression')))
            throw new Error('backtrack');
        const value = $0['value'];
        return {
            type: 'ArrayExpression',
            elements: map(expression2expression, value)
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'objectExpression')))
            throw new Error('backtrack');
        const members = $0['members'];
        return {
            type: 'ObjectExpression',
            properties: map(function () {
                try {
                    if (arguments.length !== 1)
                        throw new Error('backtrack');
                    const $0 = arguments[0];
                    if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'propertyMember')))
                        throw new Error('backtrack');
                    const name = $0['identifier'], value = $0['value'];
                    return {
                        type: 'Property',
                        key: identifier(name),
                        computed: false,
                        value: expression2expression(value),
                        kind: 'init',
                        method: false,
                        shorthand: false
                    };
                } catch (e) {
                    if (e.message !== 'backtrack')
                        throw e;
                }
                try {
                    if (arguments.length !== 1)
                        throw new Error('backtrack');
                    const $0 = arguments[0];
                    if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'spreadMember')))
                        throw new Error('backtrack');
                    const value = $0['value'];
                    return {
                        type: 'SpreadElement',
                        argument: expression2expression(value)
                    };
                } catch (e) {
                    if (e.message !== 'backtrack')
                        throw e;
                }
            }, members)
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'consExpression')))
            throw new Error('backtrack');
        const car = $0['car'], cdr = $0['cdr'];
        return callExpr(dotMemberExpr({
            type: 'ArrayExpression',
            elements: [expression2expression(car)]
        }, identifier('concat')), [expression2expression(cdr)]);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'templateLiteral')))
            throw new Error('backtrack');
        const parts = $0['parts'];
        return strConcatExpr(map(function () {
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'string')))
                    throw new Error('backtrack');
                const value = $0['value'];
                return literal(value);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 1)
                    throw new Error('backtrack');
                const $0 = arguments[0];
                if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'expression')))
                    throw new Error('backtrack');
                const value = $0['value'];
                return callExpr(identifier('$str'), [expression2expression(value)]);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, parts));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Object && !($0 instanceof Array) && $equal($0['type'], 'closureExpression')))
            throw new Error('backtrack');
        const block = $0['block'];
        return function_(null, functionBlock(block));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function function_() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const id = $0;
        const body = $1;
        return {
            type: 'FunctionDeclaration',
            id: id,
            params: [],
            body: body,
            generator: false,
            expression: false,
            async: false
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function backtrackable() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const body = $0;
        return {
            type: 'TryStatement',
            block: blockStat(body),
            handler: {
                type: 'CatchClause',
                param: identifier('e'),
                body: blockStat([ifStat(binaryExpr('!==', dotMemberExpr(identifier('e'), identifier('message')), literal('backtrack')), throwStat(identifier('e')))])
            },
            finalizer: null
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function guardedBlock() {
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        if (!($1 instanceof Array && $1.length === 0))
            throw new Error('backtrack');
        const expression = $2;
        return blockStat([returnStatement(expression)]);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        const bindings = $1;
        const expression = $2;
        return blockStat([
            variableDecl(bindings),
            returnStat(expression)
        ]);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const conditions = $0;
        const bindings = $1;
        const expression = $2;
        return ifStat(andExpr(conditions), guardedBlock([], bindings, expression));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function andExpr() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        return literal(true);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const args = $0;
        return foldl(function () {
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                const l = $0;
                const r = $1;
                return logicalExpr('&&', l, r);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, args);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function strConcatExpr() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        return literal('');
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const args = $0;
        return foldl(function () {
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                const l = $0;
                const r = $1;
                return binaryExpr('+', l, r);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, args);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function failedStat() {
    try {
        if (arguments.length !== 0)
            throw new Error('backtrack');
        return throwStat({
            type: 'NewExpression',
            callee: identifier('Error'),
            arguments: [literal('backtrack')]
        });
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function variableDecls() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const bindings = $0;
        return [variableDecl(bindings)];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function variableDecl() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const bindings = $0;
        return {
            type: 'VariableDeclaration',
            kind: 'const',
            declarations: map(function () {
                try {
                    if (arguments.length !== 1)
                        throw new Error('backtrack');
                    const $0 = arguments[0];
                    if (!($0 instanceof Array && $0.length === 2))
                        throw new Error('backtrack');
                    const identifier = $0[0], init = $0[1];
                    return {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: identifier
                        },
                        init: init
                    };
                } catch (e) {
                    if (e.message !== 'backtrack')
                        throw e;
                }
            }, bindings)
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function varDecl() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const bindings = $0;
        return {
            type: 'VariableDeclaration',
            kind: 'var',
            declarations: map(function () {
                try {
                    if (arguments.length !== 1)
                        throw new Error('backtrack');
                    const $0 = arguments[0];
                    if (!($0 instanceof Array && $0.length === 2))
                        throw new Error('backtrack');
                    const identifier = $0[0], init = $0[1];
                    return {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: identifier
                        },
                        init: init
                    };
                } catch (e) {
                    if (e.message !== 'backtrack')
                        throw e;
                }
            }, bindings)
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function callExpr() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const callee = $0;
        const args = $1;
        return {
            type: 'CallExpression',
            callee: callee,
            arguments: args
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function memberExpr() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const object = $0;
        const property = $1;
        return {
            type: 'MemberExpression',
            computed: true,
            object: object,
            property: property
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function dotMemberExpr() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const object = $0;
        const property = $1;
        return {
            type: 'MemberExpression',
            computed: false,
            object: object,
            property: property
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function logicalExpr() {
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const operator = $0;
        const left = $1;
        const right = $2;
        return {
            type: 'LogicalExpression',
            operator: operator,
            left: left,
            right: right
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function notExpr() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const argument = $0;
        return {
            type: 'UnaryExpression',
            operator: '!',
            argument: argument,
            prefix: true
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function binaryExpr() {
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const operator = $0;
        const left = $1;
        const right = $2;
        return {
            type: 'BinaryExpression',
            operator: operator,
            left: left,
            right: right
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function assignExpr() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const left = $0;
        const right = $1;
        return {
            type: 'AssignmentExpression',
            operator: '=',
            left: left,
            right: right
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function identifier() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const name = $0;
        return {
            type: 'Identifier',
            name: name
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function literal() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const value = $0;
        return {
            type: 'Literal',
            value: value,
            raw: json(value)
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function blockStat() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const body = $0;
        return {
            type: 'BlockStatement',
            body: body
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function ifStat() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const test = $0;
        const body = $1;
        return {
            type: 'IfStatement',
            test: test,
            consequent: body,
            alternate: null
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function returnStat() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const argument = $0;
        return {
            type: 'ReturnStatement',
            argument: argument
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function throwStat() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const argument = $0;
        return {
            type: 'ThrowStatement',
            argument: argument
        };
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function map() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const f = $0;
        if (!($1 instanceof Array && $1.length >= 1))
            throw new Error('backtrack');
        const x = $1[0], xs = $1.slice(1);
        return [f(x)].concat(map(f, xs));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        if (!($1 instanceof Array && $1.length === 0))
            throw new Error('backtrack');
        return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function foldl() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const f = $0;
        if (!($1 instanceof Array && $1.length >= 1))
            throw new Error('backtrack');
        const r = $1[0], rs = $1.slice(1);
        return foldl(f, r, rs);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const f = $0;
        const l = $1;
        if (!($2 instanceof Array && $2.length === 0))
            throw new Error('backtrack');
        return l;
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const f = $0;
        const l = $1;
        if (!($2 instanceof Array && $2.length >= 1))
            throw new Error('backtrack');
        const r = $2[0], rs = $2.slice(1);
        return foldl(f, f(l, r), rs);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function filter() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const f = $0;
        if (!($1 instanceof Array && $1.length === 0))
            throw new Error('backtrack');
        return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const f = $0;
        if (!($1 instanceof Array && $1.length >= 1))
            throw new Error('backtrack');
        const x = $1[0], xs = $1.slice(1);
        if (f(x))
            return [x].concat(filter(f, xs));
        if (true)
            return filter(f, xs);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function elem() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const x = $0;
        if (!($1 instanceof Array && $1.length === 0))
            throw new Error('backtrack');
        return false;
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const x = $0;
        if (!($1 instanceof Array && $1.length >= 1))
            throw new Error('backtrack');
        const y = $1[0], ys = $1.slice(1);
        if ($equal(x, y))
            return true;
        if (true)
            return elem(x, ys);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function length() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        return 0;
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        if (!($0 instanceof Array && $0.length >= 1))
            throw new Error('backtrack');
        const xs = $0.slice(1);
        return $plus(1, length(xs));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function concat() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const xs = $0;
        return foldl(function () {
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                const x = $0;
                const y = $1;
                return $plus(x, y);
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }, [], xs);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function range() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const end = $0;
        return range(0, end, 1);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        const start = $0;
        const end = $1;
        return range(start, end, 1);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 3)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1], $2 = arguments[2];
        const start = $0;
        const end = $1;
        const step = $2;
        if (start < end)
            return [start].concat(range($plus(start, step), end, step));
        if (true)
            return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function zip() {
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        if (!($0 instanceof Array && $0.length === 0))
            throw new Error('backtrack');
        return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        if (!($1 instanceof Array && $1.length === 0))
            throw new Error('backtrack');
        return [];
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
    try {
        if (arguments.length !== 2)
            throw new Error('backtrack');
        const $0 = arguments[0], $1 = arguments[1];
        if (!($0 instanceof Array && $0.length >= 1))
            throw new Error('backtrack');
        const x = $0[0], xs = $0.slice(1);
        if (!($1 instanceof Array && $1.length >= 1))
            throw new Error('backtrack');
        const y = $1[0], ys = $1.slice(1);
        return [[
                x,
                y
            ]].concat(zip(xs, ys));
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function enumerate() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const xs = $0;
        return zip(range(length(xs)), xs);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
function nub() {
    try {
        if (arguments.length !== 1)
            throw new Error('backtrack');
        const $0 = arguments[0];
        const xs = $0;
        function f() {
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                if (!($0 instanceof Array && $0.length === 0))
                    throw new Error('backtrack');
                const ys = $1;
                return [];
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
            try {
                if (arguments.length !== 2)
                    throw new Error('backtrack');
                const $0 = arguments[0], $1 = arguments[1];
                if (!($0 instanceof Array && $0.length >= 1))
                    throw new Error('backtrack');
                const x = $0[0], xs = $0.slice(1);
                const ys = $1;
                if (elem(x, ys))
                    return f(xs, ys);
                if (true)
                    return [x].concat(f(xs, [x].concat(ys)));
            } catch (e) {
                if (e.message !== 'backtrack')
                    throw e;
            }
        }
        return f(xs, []);
    } catch (e) {
        if (e.message !== 'backtrack')
            throw e;
    }
}
module.exports = {
    preDefinitions,
    postDefinitions,
    main,
    statement2body,
    definition2body,
    functionBlock,
    pattern2body,
    patternDestructure,
    value2expression,
    expression2expression,
    function_,
    backtrackable,
    guardedBlock,
    andExpr,
    strConcatExpr,
    failedStat,
    variableDecls,
    variableDecl,
    varDecl,
    callExpr,
    memberExpr,
    dotMemberExpr,
    logicalExpr,
    notExpr,
    binaryExpr,
    assignExpr,
    identifier,
    literal,
    blockStat,
    ifStat,
    returnStat,
    throwStat,
    map,
    foldl,
    filter,
    elem,
    length,
    concat,
    range,
    zip,
    enumerate,
    nub
};
