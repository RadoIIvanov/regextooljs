# regextooljs - title component - a regex tool to construct/parse js regexes
intro tool => goal to become unneeded quickly (uniform goal for most intro and/or teach tools), single page app with react

* mock ui => basic readmes for each, start from the main piece and potential pitfalls to assess feasibility () 

Version 2 (ref to new docx file)
Components (i.e. components that require a lot of space will modify the whole page when active/interacted with?): 
0. title component
1. pre-const (on the const side, e.g. top left) regex purpose/intuition -regex => set of strings by comp/attr they need to have to become members (must have the comp/attr in same relative order) - static examples with visuals (things to be represented/showcased in the examples - set of strings, relative order, components, compare to normal strings, diversity - identical vs non-identical initial states within set)
2. pre-const heuristic - start from certain/rigid components to uncertain/flexible ones (use terms from prev)
3. literals and metas connected, additional tools on the side
    *general1 - info on metas and "additional tools" is provided (i.e. choice among alternatives + some basic info when hoverred over?)
    *general2 - when you press any of the buttons/choices => available pairings are highlighted + unavailable ones greyed out (for additional tools you may have to rearrange triangle + naming)
    *general3 - some limits on the length of input boxes and arrays
    *additional tools - when you press:
        1. a "specific"(depending on what you choose, maybe a name on the left side) arr pops up on top of wh regex (and becomes active, you push things into it from the bottom) (arrs are the links between const and eng parse)
            1a. you are allowed to nest those, however there would be a limit of depth (e.g. 4-5 deep, # of arrays)
            1b. two active/incomplete arrs on the same level will not be allowed (you would have to finish one before moving on)
            1c. arrays won't be accessible directly unless tool for foreign regexes (copy/past to parse), only "accessible/modifiable" through the upside triangle input boxes
            1d. all arrays will 1. be named on the side and 2. will have this functionality (i.e. except wh regex and push down):
                    1da. drag and drop outside to delete a component, change places inside, split components by spaces (this is default for readability), join (for copy/paste and testing), parse(to engage engine), "trim"), push down (available for sub components), delete (in the case of wh regex => makes it empty, for others it eliminates them)
    *literals trigger input boxes (inbetween them and metas???) 
        *groups of literals and metas are allowed in the input box but additional tools are not (arrs pop up instead and literals and metas are highlighted expanded(input box is open))
4. pre-engine component to explain bahavior of engine - follow the pattern from component 1 (i.e. static examples of visuals, terms etc.?) 
5. engine parse component (i.e. feedback min/max stuff is important)
6. links to exercises? right (side of arrs, before the eng side) link to stackoverflow [regex] and http://play.inginf.units.it/#/
7. post-engine heuristic - once you have something that works - spend some time trying to minimize correlation to minimize chance of catastrophic backtracking, test again
8. tool for inputing foreign js regexes for parse

Proceed with static of the mock (data passed through props only, static/no user interaction)
    * do canvas stuff for algo tracker, pre const, pre engine sequentially




*** for the parse logic perform tests
*** for the browser compatibility perform tests




*** react pages, single pages generally, window keyboard shortcuts to different "views"/subpages?