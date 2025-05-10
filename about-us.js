document.addEventListener('DOMContentLoaded', function() {
    // Team member data
    const teamMembers = [
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
            position: 'Chief Research Officer',
            bio: 'Economics PhD with focus on behavioral economics and market analysis. Jamie leads our research initiatives and ensures our solutions are backed by solid economic theory and empirical evidence.',
            gradient: 'from-green-400 to-blue-500',
            experience: '12 years',
            specialty: 'Behavioral Economics',
            color: 'text-green-600'
        },
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