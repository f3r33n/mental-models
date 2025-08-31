document.addEventListener('DOMContentLoaded', () => {

    // --- EXPANDED DATASET: MENTAL MODELS (Now with categories) ---
    const mentalModelsData = [
        // Decision Making & Problem Solving
        { id: 'first-principles', title: 'First Principles', definition: 'Breaking down complex problems into their most basic, fundamental truths and reasoning up from there.', icon: 'atom', category: 'Problem Solving', examples: ['<strong>Elon Musk & SpaceX:</strong> Instead of buying rockets, he calculated the cost of raw materials and built his own for a fraction of the price.', '<strong>Cooking:</strong> Instead of a recipe, understanding the chemistry of ingredients allows for true creativity.'], related: ['inversion'] },
        { id: 'inversion', title: 'Inversion', definition: 'Approaching a problem by considering the opposite of what you want to achieve.', icon: 'refresh-cw', category: 'Problem Solving', examples: ['<strong>Investing:</strong> Instead of "How can I make money?", ask "How can I avoid losing money?".', '<strong>Productivity:</strong> Instead of "What should I do today?", ask "What should I not do today?".'] },
        { id: 'second-order', title: 'Second-Order Thinking', definition: 'Thinking beyond the immediate result to consider its longer-term consequences.', icon: 'git-merge', category: 'Decision Making', examples: ['<strong>Urban Planning:</strong> A new highway might solve immediate traffic (1st order), but encourage more cars, leading to worse congestion later (2nd order).', '<strong>Economics:</strong> Raising minimum wage helps workers (1st order), but may cause businesses to hire fewer people (2nd order).'] },
        { id: 'pareto-principle', title: 'Pareto Principle (80/20 Rule)', definition: 'Roughly 80% of the effects come from 20% of the causes.', icon: 'pie-chart', category: 'Decision Making', examples: ['<strong>Business:</strong> 80% of sales often come from 20% of customers.', '<strong>Productivity:</strong> 20% of your tasks will likely account for 80% of your results.'] },
        { id: 'occam-razor', title: 'Occam\'s Razor', definition: 'The simplest explanation is usually the right one.', icon: 'scissors', category: 'Problem Solving', examples: ['<strong>Medicine:</strong> A doctor tests for a common cold before a rare disease for common symptoms.', '<strong>Debugging:</strong> Check for a typo before assuming a deep bug in the framework.'], related: ['hanlon-razor'] },
        
        // Understanding People & Biases
        { id: 'hanlon-razor', title: 'Hanlon\'s Razor', definition: 'Never attribute to malice that which is adequately explained by carelessness.', icon: 'meh', category: 'People', examples: ['<strong>Workplace:</strong> A colleague didn\'t reply to your email. They probably missed it, they aren\'t ignoring you.', '<strong>Customer Service:</strong> A company sent the wrong product. It\'s likely a logistical error, not fraud.'] },
        { id: 'confirmation-bias', title: 'Confirmation Bias', definition: 'The tendency to search for, interpret, and recall information that confirms one\'s pre-existing beliefs.', icon: 'search', category: 'Biases', examples: ['<strong>Social Media:</strong> Following people who only share your political views, reinforcing your own opinions.', '<strong>Research:</strong> A scientist might unintentionally favor data that supports their hypothesis.'] },
        { id: 'availability-heuristic', title: 'Availability Heuristic', definition: 'Overestimating the likelihood of events that are more easily recalled in memory.', icon: 'zap', category: 'Biases', examples: ['<strong>Fear of Flying:</strong> Plane crashes are widely reported, making them seem more common than car accidents, which are statistically far more dangerous.', '<strong>Investing:</strong> Buying a "hot" stock because you hear about it everywhere, ignoring less visible but potentially better options.'] },
        { id: 'circle-of-competence', title: 'Circle of Competence', definition: 'Operating within the areas you know well and understanding the perimeter of your knowledge.', icon: 'target', category: 'People', examples: ['<strong>Investing:</strong> Warren Buffett famously avoids investing in tech he doesn\'t understand.', '<strong>Career:</strong> A skilled writer knows their strengths but doesn\'t pretend to be an expert web developer.'] },

        // Systems & The World
        { id: 'map-territory', title: 'The Map Is Not the Territory', definition: 'The model of reality is not reality itself. The map is a simplification.', icon: 'map', category: 'Systems', examples: ['<strong>Finance:</strong> A stock chart is a map; it cannot capture the real-world fear, greed, and events that move the market.', '<strong>Nutrition:</strong> A calorie count is a useful map, but the territory (your body\'s metabolism) is far more complex.'] },
        { id: 'feedback-loops', title: 'Feedback Loops', definition: 'A system where the output is fed back into the system as an input, creating a circular effect.', icon: 'repeat', category: 'Systems', examples: ['<strong>Positive Loop:</strong> A viral video gets more shares, leading to more views, leading to more shares.', '<strong>Negative Loop:</strong> A thermostat turns on the AC when it\'s hot, which cools the room, which then turns the AC off.'] },
        { id: 'law-of-diminishing-returns', title: 'Law of Diminishing Returns', definition: 'At a certain point, adding more input will result in smaller increases in output.', icon: 'trending-down', category: 'Systems', examples: ['<strong>Studying:</strong> The first hour of study is very productive. The fifth consecutive hour is much less so.', '<strong>Coffee:</strong> The first cup provides a big energy boost. The fourth cup might just make you jittery.'] },
        // Decision Making & Strategy
    { id: 'margin-of-safety', title: 'Margin of Safety', definition: 'Creating a buffer between your estimate and reality to account for error, bad luck, or unforeseen events.', icon: 'life-ring', category: 'Decision Making', examples: ['<strong>Engineering:</strong> Building a bridge to withstand 3x the heaviest load it will ever carry.', '<strong>Finance:</strong> Planning your retirement assuming your investments will return 5% annually, even if you expect 8%.'] },

// Systems & Economics
    { id: 'compounding', title: 'Compounding', definition: 'The process where an asset\'s earnings are reinvested to generate additional earnings. Growth on top of growth.', icon: 'level-up-alt', category: 'Systems', examples: ['<strong>Finance:</strong> A small investment grows exponentially over decades thanks to compound interest.', '<strong>Knowledge:</strong> The more you learn, the easier it becomes to learn new things by connecting them.'] },
    { id: 'pareto-principle', title: 'Pareto Principle (80/20 Rule)', definition: 'For many events, roughly 80% of the effects come from 20% of the causes.', icon: 'chart-pie', category: 'Systems', examples: ['<strong>Productivity:</strong> 20% of your tasks will likely account for 80% of your results. Focus there.', '<strong>Software:</strong> Fixing the top 20% of reported bugs often eliminates 80% of the crashes.'] },
    { id: 'incentives', title: 'Incentives', definition: 'People\'s actions are driven by the rewards and punishments they face. If you can understand the incentive, you can predict the behavior.', icon: 'gift', category: 'People', examples: ['<strong>Sales:</strong> A commission-based salary (incentive) motivates salespeople to sell more.', '<strong>Public Health:</strong> A tax on sugary drinks (disincentive) aims to reduce their consumption.'] },
    { id: 'supply-and-demand', title: 'Supply and Demand', definition: 'The economic model where the price of a good is determined by its availability (supply) and the desire for it (demand).', icon: 'balance-scale', category: 'Economics', examples: ['<strong>Housing:</strong> When many people want to buy homes (high demand) and few are for sale (low supply), prices increase.', '<strong>Concert Tickets:</strong> A popular artist has limited seats (low supply) but huge interest (high demand), causing high ticket prices.'] },
    { id: 'opportunity-cost', title: 'Opportunity Cost', definition: 'The value of the next-best alternative you give up when you make a decision.', icon: 'random', category: 'Economics', examples: ['<strong>Career:</strong> The opportunity cost of a 4-year degree is the salary you could have earned in those 4 years.', '<strong>Time:</strong> The hour you spend scrolling social media is an hour you can\'t spend reading a book.'] },
    { id: 'feedback-loops', title: 'Feedback Loops', definition: 'A process where the outputs of a system are circled back as inputs, either amplifying (positive) or stabilizing (negative) the effect.', icon: 'sync', category: 'Systems', examples: ['<strong>Positive Loop:</strong> A stock price rises, attracting more buyers, which pushes the price even higher.', '<strong>Negative Loop:</strong> A thermostat turns on the AC when a room gets too hot, bringing it back to the target temperature.'] },
    { id: 'critical-mass', title: 'Critical Mass', definition: 'The minimum size or amount of something required to start and maintain a process or venture.', icon: 'users', category: 'Systems', examples: ['<strong>Social Networks:</strong> A messaging app is useless with one user but becomes valuable once enough of your friends join.', '<strong>Movements:</strong> A protest needs a certain number of people to gain media attention and have an impact.'] },
    { id: 'network-effects', title: 'Network Effects', definition: 'A phenomenon where a product or service becomes more valuable as more people use it.', icon: 'share-alt', category: 'Systems', examples: ['<strong>Telephones:</strong> The first phone was useless. The value grew exponentially with each new user connected to the network.', '<strong>Marketplaces:</strong> Uber is more valuable for riders because there are many drivers, and for drivers because there are many riders.'] },
    
// More Biases
    { id: 'survivorship-bias', title: 'Survivorship Bias', definition: 'The logical error of concentrating on the people or things that "survived" a process and overlooking those that did not.', icon: 'shield-alt', category: 'Biases', examples: ['<strong>Business:</strong> We study successful entrepreneurs like Steve Jobs, ignoring the thousands who failed, creating a skewed view of success.', '<strong>History:</strong> WWII planes that returned had bullet holes on the wings, so the navy wanted to reinforce them. A statistician realized they should reinforce the areas with *no* holes (like the engine), because planes hit there never returned.'] },
    { id: 'fundamental-attribution-error', title: 'Fundamental Attribution Error', definition: 'The tendency to attribute others\' actions to their character while attributing our own actions to external factors.', icon: 'user-tag', category: 'Biases', examples: ['<strong>Driving:</strong> When someone cuts you off, they\'re a "jerk." When you cut someone off, it\'s because you "didn\'t see them."', '<strong>Work:</strong> A colleague misses a deadline and is "lazy." You miss one and it\'s because your "workload was too high."'] },
    { id: 'dunning-kruger-effect', title: 'Dunning-Kruger Effect', definition: 'A cognitive bias where people with low ability at a task overestimate their ability, while experts tend to underestimate theirs.', icon: 'brain', category: 'Biases', examples: ['<strong>Hobbies:</strong> Someone who has just learned three chords on a guitar thinks they are ready for a concert.', '<strong>Knowledge:</strong> A person who read one article on a complex topic may argue confidently with a leading expert in the field.'] },

// Physics & Science
    { id: 'leverage', title: 'Leverage', definition: 'Using a tool or system to amplify the impact of your efforts to achieve a greater output with less input.', icon: 'gavel', category: 'Physics', examples: ['<strong>Physical:</strong> Using a crowbar to lift a heavy object you couldn\'t move with your hands.', '<strong>Business:</strong> Writing code once allows you to serve millions of customers with no extra effort per customer.'] },
    { id: 'entropy', title: 'Entropy', definition: 'The natural tendency of any closed system to move from a state of order toward disorder over time.', icon: 'wind', category: 'Physics', examples: ['<strong>Your Room:</strong> Without the constant effort of cleaning (adding energy), a bedroom will naturally become messy.', '<strong>Organizations:</strong> Without leadership and clear processes, a company can devolve into chaos and inefficiency.'] },
    { id: 'law-of-diminishing-returns', title: 'Law of Diminishing Returns', definition: 'Adding more of one factor of production will, at some point, yield lower incremental returns.', icon: 'arrow-down', category: 'Economics', examples: ['<strong>Studying:</strong> The first hour of study is highly effective, but the tenth consecutive hour yields much less benefit.', '<strong>Coffee:</strong> The first cup wakes you up. The fifth cup just makes you jittery with little added focus.'] },
    { id: 'activation-energy', title: 'Activation Energy', definition: 'The minimum amount of energy that is required to initiate a reaction or process.', icon: 'bolt', category: 'Chemistry', examples: ['<strong>Habits:</strong> The hardest part of going for a run is often just putting on your shoes and getting out the door.', '<strong>Starting a Business:</strong> Securing the initial funding and first customer requires a huge burst of energy to get things moving.'] },

// Systems & Strategy
    { id: 'goodharts-law', title: 'Goodhart\'s Law', definition: 'When a measure becomes a target, it ceases to be a good measure.', icon: 'bullseye', category: 'Systems', examples: ['<strong>Education:</strong> When teachers are judged solely on student test scores, they may "teach to the test" rather than promoting deep understanding.', '<strong>Customer Support:</strong> If agents are rewarded only for short call times, they might rush customers off the phone without actually solving their problem.'] },
    { id: 'bottleneck', title: 'Constraint (Bottleneck)', definition: 'The part of a process that limits the overall throughput or speed of the entire system.', icon: 'filter', category: 'Systems', examples: ['<strong>Manufacturing:</strong> If a factory can assemble 100 cars an hour but only paint 50, the paint shop is the bottleneck.', '<strong>Traffic:</strong> A four-lane highway that merges into two lanes creates a bottleneck that causes traffic jams for miles.'] },
    { id: 'tragedy-of-the-commons', title: 'Tragedy of the Commons', definition: 'A situation where individuals with access to a shared resource act in their own self-interest, leading to the depletion of that resource.', icon: 'globe-americas', category: 'Economics', examples: ['<strong>Environment:</strong> Overfishing in international waters where no single country owns the fish stock depletes the fish population for everyone.', '<strong>Office Life:</strong> A shared kitchen becomes messy because no one feels individually responsible for cleaning it.'] },
    { id: 'proximate-vs-root-cause', title: 'Proximate vs. Root Cause', definition: 'Distinguishing between the immediate trigger of a problem (proximate) and the fundamental reason it happened (root).', icon: 'seedling', category: 'Decision Making', examples: ['<strong>Medical:</strong> The proximate cause of a heart attack is a blocked artery. The root causes might be poor diet and lack of exercise.', '<strong>IT:</strong> The proximate cause of a server crash is running out of memory. The root cause is a software bug that slowly leaks memory over time.'] },

// More Biases & Human Nature
    { id: 'maslows-hammer', title: 'Maslow\'s Hammer', definition: 'The over-reliance on a familiar tool or approach. "If all you have is a hammer, everything looks like a nail."', icon: 'hammer', category: 'Biases', examples: ['<strong>Business:</strong> A marketing team expert in social media tries to solve every problem with a social media campaign.', '<strong>Medicine:</strong> A surgeon might be more inclined to recommend surgery, even when other treatments might be more appropriate.'] },
    { id: 'hindsight-bias', title: 'Hindsight Bias', definition: 'The tendency to see past events as having been predictable at the time; the "I knew it all along" effect.', icon: 'history', category: 'Biases', examples: ['<strong>Finance:</strong> After a stock market crash, people often claim they "saw it coming all along."', '<strong>Politics:</strong> Following a surprising election result, commentators will point to "obvious" signs that the winner was always going to succeed.'] },
    { id: 'cargo-cult', title: 'Cargo Cult', definition: 'Ritually mimicking the superficial actions of successful people without understanding the underlying principles that led to their success.', icon: 'plane', category: 'People', examples: ['<strong>Startups:</strong> Installing a ping-pong table like Google, believing it creates a great culture, without implementing the deep engineering principles that actually drive success.', '<strong>Fitness:</strong> Copying the exact workout of a pro athlete without understanding the years of diet, coaching, and foundational training behind it.'] },
    { id: 'pluralistic-ignorance', title: 'Pluralistic Ignorance', definition: 'Where a majority of group members privately reject a norm, but incorrectly assume that most others accept it, and therefore go along with it.', icon: 'user-secret', category: 'Biases', examples: ['<strong>Classroom:</strong> No one asks a question because everyone thinks they are the only one who is confused.', '<strong>Corporate Culture:</strong> Many employees might disagree with a new policy but remain silent, assuming everyone else is on board.'] },

// Logic & Statistics
    { id: 'reversion-to-the-mean', title: 'Reversion to the Mean', definition: 'The phenomenon that if a variable is extreme on its first measurement, it will tend to be closer to the average on its second measurement.', icon: 'chart-line', category: 'Statistics', examples: ['<strong>Sports:</strong> A rookie who has an unbelievably great first season will likely perform closer to the league average in their second season.', '<strong>Investing:</strong> A stock that has an explosive year of growth is more likely to have average returns the following year than repeat its performance.'] },
    { id: 'bayesian-updating', title: 'Bayesian Updating', definition: 'Modifying your belief in a hypothesis in light of new evidence. The stronger the evidence, the more your belief should change.', icon: 'plus-circle', category: 'Decision Making', examples: ['<strong>Diagnosis:</strong> A doctor thinks a cough is a cold (high probability), but a positive test for a rare virus (new evidence) drastically updates their diagnosis.', '<strong>Friendship:</strong> You believe your friend is reliable. If they are late five times in a row, you update your belief about their reliability.'] },
    { id: 'thought-experiment', title: 'Thought Experiment', definition: 'An imaginary scenario used to explore the potential consequences of a principle or idea without needing to perform a physical experiment.', icon: 'lightbulb', category: 'Logic', examples: ['<strong>Philosophy:</strong> The "Trolley Problem" explores the ethics of action vs. inaction by forcing a difficult hypothetical choice.', '<strong>Physics:</strong> Einstein imagining what it would be like to ride on a beam of light helped him develop the theory of special relativity.'] },
    { id: 'normal-distribution', title: 'Normal Distribution (Bell Curve)', definition: 'A probability distribution that is symmetric about the mean, showing that data near the mean are more frequent than data far from the mean.', icon: 'bell', category: 'Statistics', examples: ['<strong>Biology:</strong> The heights of people in a population tend to follow a bell curve, with most people being of average height.', '<strong>Exams:</strong> Test scores in a large class often form a bell curve, with most students clustered around the average score.'] },
    { id: 'reductio-ad-absurdum', title: 'Reductio ad Absurdum', definition: 'Disproving a statement by showing it inevitably leads to a ridiculous, absurd, or impractical conclusion.', icon: 'bomb', category: 'Logic', examples: ['<strong>Debate:</strong> "If everyone is allowed to drive as fast as they want, they would drive 200 mph through school zones. Therefore, we need speed limits."', '<strong>Math:</strong> To prove the square root of 2 is irrational, one first assumes it *is* rational and shows this leads to a logical contradiction.'] },

// Science & Innovation
    { id: 'catalyst', title: 'Catalyst', definition: 'An element or event that precipitates a significant change or reaction without being consumed or changed itself.', icon: 'flask', category: 'Chemistry', examples: ['<strong>Social Change:</strong> A single viral video can act as a catalyst for a widespread social movement.', '<strong>Business:</strong> The introduction of the internet was a catalyst for entire industries to change their practices.'] },
    { id: 'chindogu', title: 'Chindōgu (珍道具)', definition: 'The Japanese art of inventing gadgets that seem to solve a problem but are ultimately too impractical or absurd to actually be useful.', icon: 'grin-beam-sweat', category: 'Innovation', examples: ['<strong>Invention:</strong> A device that combines a fork with a small electric fan to cool your noodles for you as you eat.', '<strong>Concept:</strong> It highlights the gap between a technical solution and a practical one, showing that just because something *can* be made doesn\'t mean it *should* be.'] }
    ];

    // --- DOM ELEMENT REFERENCES ---
    const modelsGrid = document.getElementById('models-grid');
    const filterBar = document.getElementById('filter-bar');
    const modal = document.getElementById('model-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalButton = document.querySelector('.close-modal');
    const themeToggle = document.getElementById('checkbox');
    const taglineEl = document.getElementById('tagline');

    // --- INITIALIZATION ---
    renderFilterBar();
    renderModelCards('All');
    initTheme();
    initScrollAnimations();
    animateTagline();
    setTimeout(drawConnectionLines, 500);
    window.addEventListener('resize', () => requestAnimationFrame(drawConnectionLines));

    // --- FUNCTIONS ---
    
    function renderFilterBar() {
        const categories = ['All', ...new Set(mentalModelsData.map(m => m.category))];
        filterBar.innerHTML = categories.map(cat => 
            `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
        ).join('');
        
        filterBar.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const category = e.target.dataset.category;
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                filterModelCards(category);
            }
        });
    }
    
    function filterModelCards(category) {
        const cards = document.querySelectorAll('.model-card');
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const show = category === 'All' || cardCategory === category;
            card.classList.toggle('card-hidden', !show);
        });
        // Redraw connections for the newly visible cards
        setTimeout(drawConnectionLines, 400); // Wait for CSS transition
    }

    function renderModelCards(initialCategory) {
        modelsGrid.innerHTML = '<svg id="connections-svg" class="connections-canvas"></svg>'; // Reset with SVG canvas
        mentalModelsData.forEach(model => {
            const card = document.createElement('div');
            card.className = 'model-card';
            card.dataset.modelId = model.id;
            card.dataset.category = model.category;
            card.innerHTML = `
                <div class="card-header">
                    <i data-feather="${model.icon}" class="icon"></i>
                    <h3 class="card-title">${model.title}</h3>
                </div>
                <p class="card-definition">${model.definition}</p>
            `;
            modelsGrid.appendChild(card);
            card.addEventListener('click', () => openModal(model));
        });
        feather.replace();
    }

    function openModal(model) {
        modalBody.innerHTML = `
            <h2>${model.title}</h2>
            <p>${model.definition}</p>
            <h3>Real-World Examples</h3>
            <ul>${model.examples.map(ex => `<li>${ex}</li>`).join('')}</ul>
        `;
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
    }
    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    function initTheme() {
        const isDarkMode = localStorage.getItem('darkMode') !== 'false';
        themeToggle.checked = isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);

        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            localStorage.setItem('darkMode', themeToggle.checked);
            // Redraw lines as theme colors might change
            requestAnimationFrame(drawConnectionLines); 
        });
    }

    function initScrollAnimations() {
        const sections = document.querySelectorAll('.content-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        sections.forEach(section => observer.observe(section));
    }
    
    function animateTagline() {
        const taglines = ["A toolkit for clearer thought.", "Navigate complexity with wisdom.", "The mind's finest instruments.", "Solve problems from first principles."];
        let i = 0;
        setInterval(() => {
            taglineEl.style.opacity = 0;
            setTimeout(() => {
                i = (i + 1) % taglines.length;
                taglineEl.textContent = taglines[i];
                taglineEl.style.opacity = 1;
            }, 500);
        }, 5000);
    }

    function drawConnectionLines() {
        const svg = document.getElementById('connections-svg');
        if (!svg) return;
        svg.innerHTML = '';

        const connections = new Set(); // Use a Set to avoid duplicate lines
        mentalModelsData.forEach(model => {
            if (model.related) {
                model.related.forEach(relatedId => {
                    const pair = [model.id, relatedId].sort().join('-');
                    connections.add(pair);
                });
            }
        });

        connections.forEach(connPair => {
            const [fromId, toId] = connPair.split('-');
            const fromCard = document.querySelector(`.model-card[data-model-id="${fromId}"]`);
            const toCard = document.querySelector(`.model-card[data-model-id="${toId}"]`);

            // IMPORTANT: Only draw lines for visible cards
            if (fromCard && toCard && !fromCard.classList.contains('card-hidden') && !toCard.classList.contains('card-hidden')) {
                const fromRect = fromCard.getBoundingClientRect();
                const toRect = toCard.getBoundingClientRect();
                const containerRect = modelsGrid.getBoundingClientRect();

                const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
                const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
                const x2 = toRect.left + toRect.width / 2 - containerRect.left;
                const y2 = toRect.top + toRect.height / 2 - containerRect.top;

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1); line.setAttribute('y1', y1);
                line.setAttribute('x2', x2); line.setAttribute('y2', y2);
                line.setAttribute('class', 'connection-line');
                svg.appendChild(line);
            }
        });
    }
});
// --- Custom Cursor Clock (Final Corrected Version) ---

const cursorClock = document.getElementById('cursor-clock');
const hourHand = cursorClock.querySelector('.hour-hand');
const minuteHand = cursorClock.querySelector('.minute-hand');
const secondHand = cursorClock.querySelector('.second-hand');

// 1. Function to move the clock with the cursor
window.addEventListener('mousemove', e => {
    // We use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
        cursorClock.style.left = `${e.clientX}px`;
        cursorClock.style.top = `${e.clientY}px`;
    });
});

// 2. Function to update the clock hands with corrected rotation
function setClockHands() {
    const now = new Date();

    const seconds = now.getSeconds();
    // The "+ 90" offset has been removed for the correct orientation.
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    // The "+ 90" offset has been removed.
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursForClock = hours % 12 || 12;
    // The "+ 90" offset has been removed.
    const hoursDegrees = ((hoursForClock / 12) * 360) + ((minutes / 60) * 30);
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

// 3. Update the clock every second
setInterval(setClockHands, 1000);

// Set the hands immediately on load
setClockHands();