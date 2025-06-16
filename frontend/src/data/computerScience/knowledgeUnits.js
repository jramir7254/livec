

export const knowledgeUnits = {

    'artificial-intelligence': [
        {
            name: 'AI-Introduction: Fundamental Issues',
            slug: 'ai-introduction-fundamental-issues',
            csCore: [
                '1. Overview of AI problems, Examples of successful recent AI applications',
                '2. Definitions of agents with examples (e.g., reactive, deliberative)',
                '3. What is intelligent behavior?',
                '   • The Turing test and its flaws',
                '   • Multimodal input and output',
                '   • Simulation of intelligent behavior',
                '4. Problem characteristics',
                '   • Fully versus partially observable',
                '   • Single versus multi-agent',
                '   • Deterministic versus stochastic',
                '   • Static versus dynamic',
                '   • Discrete versus continuous',
                '5. Nature of agents',
                '   • Autonomous, semi-autonomous, mixed-initiative autonomy',
                '   • Reflexive, goal-based, and utility-based',
                '   • Decision making under uncertainty and with incomplete information',
                '   • The importance of perception and environmental interactions',
                '   • Learning-based agents',
                '   • Embodied agents (sensors, dynamics, effectors)',
                '6. Overview of AI Applications, growth, and impact (economic, societal, ethics)',
            ],
            kaCore: [
                '1. Practice identifying problem characteristics in example environments',
                '2. Additional depth on nature of agents with examples',
                '3. Additional depth on AI Applications, Growth, and Impact (economic, societal, ethics)',

            ],
            nonCore: [
                '1. Philosophical issues',
                '2. History of AI',
            ],
            learningOutcomes: [
                '1. Describe the Turing test and the “Chinese Room” thought experiment.',
                '2. Differentiate between optimal reasoning/behavior and human-like reasoning/behavior.',
                '3. Differentiate the terms: AI, machine learning, and deep learning.',
                '4. Enumerate the characteristics of a specific problem.',
            ],
        },

        //AI-Search: Search
        {
            name: 'AI-Search: Search',
            slug: 'ai-search-search',
            csCore: [
                '1. State space representation of a problem',
                '2. Specifying states, goals, and operators',
                '3. Factoring states into representations (hypothesis spaces)',
                '4. Problem solving by graph search',
                '   • Graphs as a space, and tree traversals as exploration of that space',
                '   • Dynamic construction of the graph (not given upfront)',
                '5. Uninformed graph search for problem solving',
                '   • Breadth-first search',
                '   • Depth-first search with iterative deepening',
                '   • Uniform cost search',
                '6. Heuristic graph search for problem solving',
                '   • Heuristic construction and admissibility',
                '   • Hill-climbing',
                '   • Local minima and the search landscape (local vs global solutions)',
                '   • Greedy best-first search',
                '   • A* search',
                '7. Space and time complexities of graph search algorithms'
            ],
            kaCore: [
                '1. Bidirectional search',
                '2. Beam search',
                '3. Two-player adversarial games',
                '   • Minimax search',
                '   • Alpha-beta pruning (ply cutoff)',
                '4. Implementation of A* search',
                '5. Constraint satisfaction'
            ],
            nonCore: [
                '1. Understanding the search space',
                '2. Constructing search trees',
                '3. Dynamic search spaces',
                '4. Combinatorial explosion of search space',
                '5. Search space topology (e.g., ridges, saddle points, local minima)',
                '6. Local search',
                '7. Tabu search',
                '8. Variations on A* (IDA*, SMA*, RBFS)',
                '9. Two-player adversarial games',
                '10. The horizon effect',
                '11. Opening playbooks/endgame solutions',
                '12. What it means to “solve” a game (e.g., checkers)',
                '13. Implementation of minimax search, beam search',
                '14. Expectimax search (MDP-solving) and chance nodes',
                '15. Stochastic search',
                '16. Simulated annealing',
                '17. Genetic algorithms',
                '18. Monte-Carlo tree search'
            ],
            learningOutcomes: [
                '1. Design the state space representation for a puzzle (e.g., N-queens or 3-jug problem).',
                '2. Select and implement an appropriate uninformed search algorithm for a problem (e.g., tic-tac-toe), and characterize its time and space complexities.',
                '3. Select and implement an appropriate informed search algorithm for a problem after designing a helpful heuristic function (e.g., a robot navigating a 2D gridworld).',
                '4. Evaluate whether a heuristic for a given problem is admissible/can guarantee an optimal solution.',
                '5. Apply minimax search in a two-player adversarial game (e.g., connect four), using heuristic evaluation at a particular depth to compute the scores to back up.',
                '6. Design and implement a genetic algorithm solution to a problem.',
                '7. Design and implement a simulated annealing schedule to avoid local minima in a problem.',
                '8. Design and implement A*/beam search to solve a problem, and compare it against other search algorithms in terms of the solution cost, number of nodes expanded, etc.',
                '9. Apply minimax search with alpha-beta pruning to prune search space in a two-player adversarial game (e.g., connect four).',
                '10. Compare and contrast genetic algorithms with classic search techniques, explaining when it is most appropriate to use a genetic algorithm to learn a model versus other forms of optimization (e.g., gradient descent).',
                '11. Compare and contrast various heuristic searches vis-a-vis applicability to a given problem.',
                '12. Model a logic or Sudoku puzzle as a constraint satisfaction problem, solve it with backtrack search, and determine how much arc consistency can reduce the search space.'

            ]
        },
        { name: "AI-KRR: Fundamental Knowledge Representation and Reasoning", slug: "ai-krr-fundamental-knowledge-representation-and-reasoning" },
        { name: "AI-ML: Machine Learning", slug: "ai-ml-machine-learning" },
        { name: "AI-SEP: Applications and Societal Impact", slug: "ai-sep-applications-and-societal-impact" },
        { name: "AI-LRR: Logical Representation and Reasoning", slug: "ai-lrr-logical-representation-and-reasoning" },
        { name: "AI-Probability: Probabilistic Representation and Reasoning", slug: "ai-probability-probabilistic-representation-and-reasoning" },
        { name: "AI-Planning: Planning", slug: "ai-planning-planning" },
        { name: "AI-Agents: Agents and Cognitive Systems", slug: "ai-agents-agents-and-cognitive-systems" },
        { name: "AI-NLP: Natural Language Processing", slug: "ai-nlp-natural-language-processing" },
        { name: "AI-Robotics: Robotics", slug: "ai-robotics-robotics" },
        { name: "AI-Vision: Perception and Computer Vision", slug: "ai-vision-perception-and-computer-vision" }
    ],

    'algorithmic-foundations': [
        { name: "AL-Foundational: Foundational Data Structures and Algorithms", slug: "al-foundational" },
        { name: "AL-Strategies: Algorithmic Strategies", slug: "al-strategies" },
        { name: "AL-Complexity: Complexity", slug: "al-complexity" },
        { name: "AL-Models: Computational Models and Formal Languages", slug: "al-models" },
        { name: "AL-SEP: Society, Ethics, and the Profession", slug: "al-sep" }
    ],

    'architecture-and-organization-ar': [
        { name: "AR-Foundational: Introduction to Computer Architecture", slug: "ar-foundational" },
        { name: "AR-DataRep: Data Representation", slug: "ar-datarep" },
        { name: "AR-Arithmetic: Computer Arithmetic", slug: "ar-arithmetic" },
        { name: "AR-Processor: Processor Design", slug: "ar-processor" },
        { name: "AR-Memory: Memory Systems", slug: "ar-memory" },
        { name: "AR-Parallel: Parallel and Distributed Architectures", slug: "ar-parallel" },
        { name: "AR-Systems: Systems Integration and Performance", slug: "ar-systems" },
        { name: "AR-SEP: Society, Ethics, and the Profession", slug: "ar-sep" }
    ],

    'data-management-dm': [
        { name: "DM-Foundations: Foundations of Data Management", slug: "dm-foundations" },
        { name: "DM-Modeling: Data Modeling and Database Design", slug: "dm-modeling" },
        { name: "DM-Implementation: Database Implementation", slug: "dm-implementation" },
        { name: "DM-Analytics: Data Analytics and Processing", slug: "dm-analytics" },
        { name: "DM-Management: Data Governance and Management", slug: "dm-management" },
        { name: "DM-SEP: Society, Ethics, and the Profession", slug: "dm-sep" }
    ],

    'human-computer-interaction-hci': [
        { name: "HCI-Foundations: Foundations of Human-Computer Interaction", slug: "hci-foundations" },
        { name: "HCI-Design: Design and Prototyping", slug: "hci-design" },
        { name: "HCI-UserTesting: User Research and Evaluation", slug: "hci-usertesting" },
        { name: "HCI-Universal: Universal and Accessible Design", slug: "hci-universal" },
        { name: "HCI-SEP: Society, Ethics, and the Profession", slug: "hci-sep" }
    ],

    'foundations-of-programming-languages-fpl': [
        { name: "FPL-Foundations: Programming Language Fundamentals", slug: "fpl-foundations" },
        { name: "FPL-Paradigms: Programming Paradigms", slug: "fpl-paradigms" },
        { name: "FPL-Translation: Language Translation and Compilation", slug: "fpl-translation" },
        { name: "FPL-Types: Type Systems", slug: "fpl-types" },
        { name: "FPL-Semantics: Semantics and Formal Reasoning", slug: "fpl-semantics" },
        { name: "FPL-SEP: Society, Ethics, and the Profession", slug: "fpl-sep" }
    ],

    'graphics-and-interactive-techniques-git': [
        { name: "GIT-Foundations: Foundations of Graphics and Interactive Techniques", slug: "git-foundations" },
        { name: "GIT-Graphics: 2D and 3D Computer Graphics", slug: "git-graphics" },
        { name: "GIT-Interaction: Human-Centered Interaction Techniques", slug: "git-interaction" },
        { name: "GIT-Visualization: Data and Scientific Visualization", slug: "git-visualization" },
        { name: "GIT-Gaming: Game Technologies and Interactive Media", slug: "git-gaming" },
        { name: "GIT-SEP: Society, Ethics, and the Profession", slug: "git-sep" }
    ],

    'mathematical-and-statistical-foundations-msf': [
        { name: "MSF-Logic: Logic and Discrete Structures", slug: "msf-logic" },
        { name: "MSF-Structures: Mathematical Structures and Proof Techniques", slug: "msf-structures" },
        { name: "MSF-Probability: Probability and Statistics", slug: "msf-probability" },
        { name: "MSF-Modeling: Mathematical Modeling and Simulation", slug: "msf-modeling" },
        { name: "MSF-SEP: Society, Ethics, and the Profession", slug: "msf-sep" }
    ],

    'networking-and-communications-nc': [
        { name: "NC-Foundations: Foundations of Networking and Communication", slug: "nc-foundations" },
        { name: "NC-Protocols: Communication Protocols and Models", slug: "nc-protocols" },
        { name: "NC-Networking: Networking Technologies and Infrastructure", slug: "nc-networking" },
        { name: "NC-Security: Network Security and Privacy", slug: "nc-security" },
        { name: "NC-Performance: Performance and Quality of Service", slug: "nc-performance" },
        { name: "NC-SEP: Society, Ethics, and the Profession", slug: "nc-sep" }
    ],

    'operating-systems-os': [
        { name: "OS-Foundations: Introduction to Operating Systems", slug: "os-foundations" },
        { name: "OS-Processes: Processes, Threads, and Concurrency", slug: "os-processes" },
        { name: "OS-Memory: Memory Management", slug: "os-memory" },
        { name: "OS-Storage: File and Storage Systems", slug: "os-storage" },
        { name: "OS-Security: Protection, Security, and Virtualization", slug: "os-security" },
        { name: "OS-SEP: Society, Ethics, and the Profession", slug: "os-sep" }
    ],

    'parallel-and-distributed-computing-pdc': [
        { name: "PDC-Foundations: Foundations of Parallel and Distributed Computing", slug: "pdc-foundations" },
        { name: "PDC-Parallelism: Forms of Parallelism", slug: "pdc-parallelism" },
        { name: "PDC-Design: Parallel and Distributed System Design", slug: "pdc-design" },
        { name: "PDC-Models: Models of Parallel and Distributed Computing", slug: "pdc-models" },
        { name: "PDC-SEP: Society, Ethics, and the Profession", slug: "pdc-sep" }
    ],

    'software-development-fundamentals-sdf': [
        { name: "SDF-Foundations: Foundations of Software Development", slug: "sdf-foundations" },
        { name: "SDF-Development: Software Construction and Evolution", slug: "sdf-development" },
        { name: "SDF-Testing: Software Testing and Quality", slug: "sdf-testing" },
        { name: "SDF-Tools: Software Development Tools and Environments", slug: "sdf-tools" },
        { name: "SDF-SEP: Society, Ethics, and the Profession", slug: "sdf-sep" }
    ],

    'software-engineering-se': [
        { name: "SE-Foundations: Foundations of Software Engineering", slug: "se-foundations" },
        { name: "SE-Requirements: Requirements Engineering", slug: "se-requirements" },
        { name: "SE-Design: Software Design and Architecture", slug: "se-design" },
        { name: "SE-Testing: Software Testing and Verification", slug: "se-testing" },
        { name: "SE-Process: Software Process and Life Cycle", slug: "se-process" },
        { name: "SE-Quality: Software Quality and Maintenance", slug: "se-quality" },
        { name: "SE-Tools: Software Engineering Tools and Environments", slug: "se-tools" },
        { name: "SE-SEP: Society, Ethics, and the Profession", slug: "se-sep" }
    ]
}