document.addEventListener('DOMContentLoaded', function() {
    // Team member data
    const teamMembers = [
        // Founders (2)
        {
            initials: 'AS',
            name: 'Alex Smith',
            position: 'Founder & CEO',
            bio: 'Visionary leader with expertise in sustainable economic models and innovation strategies. Alex founded Econovation with the mission to transform how we approach economic challenges in the 21st century.',
            gradient: 'from-blue-400 to-purple-500',
            experience: '15+ years',
            specialty: 'Economic Innovation',
            color: 'text-blue-600'
        },
        {
            initials: 'JL',
            name: 'Jamie Lee',
            position: 'Co-Founder & CRO',
            bio: 'Economics PhD with focus on behavioral economics and market analysis. Jamie leads our research initiatives and ensures our solutions are backed by solid economic theory and empirical evidence.',
            gradient: 'from-green-400 to-blue-500',
            experience: '12 years',
            specialty: 'Behavioral Economics',
            color: 'text-green-600'
        },
        
        // Club Leaders (2)
        {
            initials: 'MK',
            name: 'Morgan Kim',
            position: 'Technology Director',
            bio: 'Expert in fintech solutions and economic modeling software. Morgan bridges the gap between economic theory and practical technological implementation, creating tools that make economic concepts accessible.',
            gradient: 'from-yellow-400 to-orange-500',
            experience: '10 years',
            specialty: 'Fintech Solutions',
            color: 'text-yellow-600'
        },
        {
            initials: 'RP',
            name: 'Riley Patel',
            position: 'Marketing Strategist',
            bio: 'Creative mind behind our brand messaging and outreach campaigns. Riley ensures our economic solutions reach the audiences who need them most, translating complex concepts into compelling narratives.',
            gradient: 'from-red-400 to-pink-500',
            experience: '8 years',
            specialty: 'Brand Strategy',
            color: 'text-red-600'
        },
        
        // SMM Team (5)
        {
            initials: 'TJ',
            name: 'Taylor Johnson',
            position: 'Data Scientist',
            bio: 'Specializes in economic forecasting and predictive analytics. Taylor transforms complex economic data into actionable insights for our clients and partners, helping them navigate economic uncertainties.',
            gradient: 'from-purple-400 to-indigo-500',
            experience: '9 years',
            specialty: 'Predictive Analytics',
            color: 'text-purple-600'
        },
        {
            initials: 'SN',
            name: 'Sam Nguyen',
            position: 'Community Manager',
            bio: 'Builds relationships with partners and manages our growing community. Sam ensures our economic solutions create real impact in communities worldwide, fostering collaboration across sectors.',
            gradient: 'from-indigo-400 to-blue-500',
            experience: '7 years',
            specialty: 'Community Building',
            color: 'text-indigo-600'
        },
        {
            initials: 'EW',
            name: 'Ellis Wong',
            position: 'Financial Analyst',
            bio: 'Oversees financial planning and investment strategies for our initiatives. Ellis ensures our economic solutions are not just innovative but financially sustainable and viable in diverse market conditions.',
            gradient: 'from-pink-400 to-red-500',
            experience: '11 years',
            specialty: 'Investment Strategy',
            color: 'text-pink-600'
        },
        {
            initials: 'JR',
            name: 'Jordan Rivera',
            position: 'Sustainability Coordinator',
            bio: 'Ensures our economic solutions align with environmental sustainability goals. Jordan brings expertise in green economics and circular economic models, helping clients transition to more sustainable practices.',
            gradient: 'from-teal-400 to-green-500',
            experience: '6 years',
            specialty: 'Green Economics',
            color: 'text-teal-600'
        },
        {
            initials: 'CB',
            name: 'Casey Blake',
            position: 'Content Creator',
            bio: 'Talented content creator who specializes in translating complex economic concepts into engaging digital content. Casey helps our audience understand economic principles through creative storytelling.',
            gradient: 'from-blue-400 to-cyan-500',
            experience: '5 years',
            specialty: 'Digital Content',
            color: 'text-blue-600'
        },
        {
            initials: 'LP',
            name: 'Lorem Ipsum',
            position: 'Dolor Sit Amet',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
            gradient: 'from-blue-400 to-purple-500',
            experience: '5 years',
            specialty: 'Consectetur Adipiscing',
            color: 'text-blue-600'
        },
        {
            initials: 'CD',
            name: 'Consectetur Dolor',
            position: 'Adipiscing Elit',
            bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
            gradient: 'from-green-400 to-blue-500',
            experience: '8 years',
            specialty: 'Sed Do Eiusmod',
            color: 'text-green-600'
        },
        {
            initials: 'SE',
            name: 'Sed Eiusmod',
            position: 'Tempor Incididunt',
            bio: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            gradient: 'from-yellow-400 to-orange-500',
            experience: '6 years',
            specialty: 'Ut Labore Et Dolore',
            color: 'text-yellow-600'
        },
        {
            initials: 'UL',
            name: 'Ut Labore',
            position: 'Et Dolore Magna',
            bio: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.',
            gradient: 'from-red-400 to-pink-500',
            experience: '9 years',
            specialty: 'Aliqua Ut Enim',
            color: 'text-red-600'
        },
        {
            initials: 'AV',
            name: 'Aliqua Veniam',
            position: 'Nostrud Exercitation',
            bio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
            gradient: 'from-purple-400 to-indigo-500',
            experience: '4 years',
            specialty: 'Ullamco Laboris',
            color: 'text-purple-600'
        },
        {
            initials: 'UL',
            name: 'Ullamco Laboris',
            position: 'Nisi Ut Aliquip',
            bio: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            gradient: 'from-indigo-400 to-blue-500',
            experience: '7 years',
            specialty: 'Ex Ea Commodo',
            color: 'text-indigo-600'
        },
        {
            initials: 'EC',
            name: 'Ex Commodo',
            position: 'Consequat Duis',
            bio: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
            gradient: 'from-pink-400 to-red-500',
            experience: '11 years',
            specialty: 'Aute Irure Dolor',
            color: 'text-pink-600'
        },
        {
            initials: 'AI',
            name: 'Aute Irure',
            position: 'Dolor In Reprehenderit',
            bio: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
            gradient: 'from-teal-400 to-green-500',
            experience: '6 years',
            specialty: 'In Voluptate Velit',
            color: 'text-teal-600'
        },
        {
            initials: 'VE',
            name: 'Voluptate Esse',
            position: 'Cillum Dolore Eu',
            bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.',
            gradient: 'from-blue-400 to-cyan-500',
            experience: '5 years',
            specialty: 'Fugiat Nulla Pariatur',
            color: 'text-blue-600'
        }
    ];
    
    // Get DOM elements
    const teamCards = document.querySelectorAll('.team-card');
    const memberDetails = document.getElementById('memberDetails');
    const detailsOverlay = document.getElementById('detailsOverlay');
    const closeDetails = document.getElementById('closeDetails');
    
    let isModalTransitioning = false;
    
    // Add click event to each team card
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            if (isModalTransitioning) return;
            
            const index = parseInt(this.getAttribute('data-member'));
            const member = teamMembers[index];
            
            // If modal is already open, close it first then open the new one
            if (memberDetails.classList.contains('active')) {
                isModalTransitioning = true;
                closeMemberDetailsWithCallback(() => {
                    showMemberDetails(member);
                    isModalTransitioning = false;
                });
            } else {
                showMemberDetails(member);
            }
        });
    });
    
    function showMemberDetails(member) {
        // Update member details modal with member info
        document.querySelector('.member-initials').textContent = member.initials;
        document.querySelector('.member-name').textContent = member.name;
        
        const positionElement = document.querySelector('.member-position');
        positionElement.textContent = member.position;
        positionElement.className = `member-position text-xl font-medium mb-4 ${member.color}`;
        
        document.querySelector('.member-bio').textContent = member.bio;
        document.querySelector('.member-experience').textContent = member.experience;
        document.querySelector('.member-specialty').textContent = member.specialty;
        
        // Update gradient
        document.querySelector('.member-gradient').className = 
            `w-full h-full member-gradient bg-gradient-to-br ${member.gradient} flex items-center justify-center`;
        
        // Show the details modal
        memberDetails.classList.remove('hidden');
        setTimeout(() => {
            memberDetails.classList.add('active');
        }, 10);
        
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal when X button or overlay is clicked
    closeDetails.addEventListener('click', () => closeMemberDetails());
    detailsOverlay.addEventListener('click', () => closeMemberDetails());
    
    function closeMemberDetails() {
        memberDetails.classList.remove('active');
        
        // Delay the modal hiding to allow for animations
        setTimeout(() => {
            memberDetails.classList.add('hidden');
            document.body.style.overflow = ''; // Re-enable scrolling
        }, 300);
    }
    
    function closeMemberDetailsWithCallback(callback) {
        memberDetails.classList.remove('active');
        
        // Delay the modal hiding to allow for animations
        setTimeout(() => {
            memberDetails.classList.add('hidden');
            if (callback) callback();
        }, 300);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !memberDetails.classList.contains('hidden')) {
            closeMemberDetails();
        }
    });
});

// Department tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.department-tab');
    const nav = document.getElementById('mainNav');
    
    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            const sections = document.querySelectorAll('.department-section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the target section
            const targetSection = document.getElementById(this.dataset.target);
            targetSection.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});