const compose = (...funcs) => (comp) => funcs.reduceRight((prevResult, f) => f(prevResult), comp);

export default compose;
