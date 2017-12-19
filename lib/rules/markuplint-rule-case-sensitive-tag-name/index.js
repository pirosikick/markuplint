"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../../parser");
const rule_1 = require("../../rule");
const messages_1 = require("../messages");
class default_1 extends rule_1.default {
    constructor() {
        super(...arguments);
        this.name = 'case-sensitive-tag-name';
        this.defaultLevel = 'warning';
        this.defaultValue = 'lower';
    }
    async verify(document, config, ruleset, locale) {
        const reports = [];
        const ms = config.level === 'error' ? 'must' : 'should';
        const deny = config.value === 'lower' ? /[A-Z]/ : /[a-z]/;
        const message = await messages_1.default(locale, `{0} of {1} ${ms} be {2}`, 'Tag name', 'HTML', `${config.value}case`);
        await document.walk(async (node) => {
            if ((node instanceof parser_1.Element && node.namespaceURI === 'http://www.w3.org/1999/xhtml')
                ||
                    node instanceof parser_1.EndTagNode) {
                if (deny.test(node.nodeName)) {
                    reports.push({
                        level: config.level,
                        message,
                        line: node.line,
                        col: node instanceof parser_1.Element
                            ?
                                node.col + 1 // remove "<" char.
                            :
                                node.col + 2,
                        raw: node.nodeName,
                    });
                }
            }
        });
        return reports;
    }
}
exports.default = default_1;