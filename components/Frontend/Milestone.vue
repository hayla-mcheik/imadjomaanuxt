<template>
  <div class="milestones-container border-b-8 border-white py-16 relative py-16 overflow-hidde">
      <div class="section-title mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-white">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Journey</span></h2>
        <p class="text-gray-400 text-center mt-4 max-w-2xl mx-auto">Discover the milestones that shaped our company's success story.</p>
      </div>

    
    <div class="timeline">
      <!-- Timeline center line -->
      <div class="timeline-line"></div>
      
      <!-- Milestones -->
      <div 
        v-for="(milestone, index) in milestones" 
        :key="index" 
        class="milestone" 
        :class="{ 'visible': milestone.visible, 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
        ref="milestones"
      >
        <div class="milestone-content">

          
          <div class="milestone-text">
            <div class="milestone-date">
              <i class="fas fa-calendar-alt"></i>
              {{ milestone.date }}
            </div>
            <h2 class="milestone-title">{{ milestone.title }}</h2>
            <p class="milestone-description">{{ milestone.description }}</p>
            
   
          </div>
        </div>
      </div>
    </div>
    
    <div class="journey-continues">
      <div class="sparkle">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <p>Every milestone is a stepping stone to greater achievements. <span class="highlight">The journey continues...</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Milestone',
  data() {
    return {
      milestones: [
        {
          date: 'January 2018',
          title: 'Company Foundation',
          description: 'PromoFix was founded with a vision to revolutionize promotional solutions in Lebanon. Our small team started in a shared office space in Beirut.',
          icon: 'fas fa-rocket',
          color: '#ff6b6b',
          stats: [
            { value: '3', label: 'Team Members' },
            { value: '1', label: 'Office' },
            { value: '5', label: 'Clients' }
          ],
          visible: true
        },
        {
          date: 'June 2019',
          title: 'First Major Project',
          description: 'We secured our first enterprise client and delivered a nationwide promotional campaign across Lebanon. This marked our breakthrough in the industry.',
          icon: 'fas fa-trophy',
          color: '#4ecdc4',
          stats: [
            { value: '15', label: 'Team Members' },
            { value: '120%', label: 'Growth' },
            { value: '50+', label: 'Clients' }
          ],
          visible: true
        },
        {
          date: 'March 2020',
          title: 'Digital Transformation',
          description: 'Launched our digital platform to serve clients remotely during challenging times. This pivot positioned us as innovators in the market.',
          icon: 'fas fa-laptop-code',
          color: '#6a67ce',
          stats: [
            { value: '300%', label: 'Online Growth' },
            { value: '25', label: 'Team Members' },
            { value: '100+', label: 'Projects' }
          ],
          visible: true
        },
        {
          date: 'September 2021',
          title: 'Regional Expansion',
          description: 'Expanded our services to neighboring countries including Jordan and Egypt. Established regional partnerships and offices.',
          icon: 'fas fa-globe-asia',
          color: '#ffa62b',
          stats: [
            { value: '3', label: 'Countries' },
            { value: '45', label: 'Team Members' },
            { value: '250+', label: 'Clients' }
          ],
          visible: true
        },
        {
          date: 'May 2023',
          title: 'Innovation Award',
          description: 'Received the Lebanese Business Innovation Award for our sustainable promotional solutions. Recognized for our eco-friendly approach.',
          icon: 'fas fa-award',
          color: '#ff6b6b',
          stats: [
            { value: '1st', label: 'Place Award' },
            { value: '80+', label: 'Team Members' },
            { value: '500+', label: 'Projects' }
          ],
          visible: true
        }
      ]
    };
  },
  mounted() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkVisibility);
  },
  methods: {
    checkVisibility() {
      this.milestones.forEach((milestone, index) => {
        if (!milestone.visible) {
          const element = this.$refs.milestones[index];
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
              // Add delay for sequential animation
              setTimeout(() => {
                this.milestones[index].visible = true;
              }, 150 * index);
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.milestones-container {
  background: black;
  color: #fff;
  min-height: 80vh;
  font-family: 'Poppins', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.header h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, red, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.header h1::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 5px;
  background: linear-gradient(90deg, red, #fff);
  border-radius: 3px;
}

.header p {
  font-size: 1.2rem;
  color: #e0e0ff;
  line-height: 1.7;
  margin-top: 40px;
  opacity: 0.9;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, red, #fff);
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
  z-index: 1;
}

.milestone {
  position: relative;
  width: calc(50% - 60px);
  margin-bottom: 0px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
}

.milestone.visible {
  opacity: 1;
  transform: translateY(0);
}

.milestone.left {
  margin-right: auto;
}

.milestone.right {
  margin-left: auto;
}

.milestone-content {
  display: flex;
  padding: 30px;
  border-radius: 20px;
  background: rgba(26, 32, 54, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.milestone-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: -1;
}

.milestone:hover .milestone-content {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px black;
}

.milestone-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  margin-right: 25px;
  flex-shrink: 0;
  box-shadow: 0 5px 15px black;
  transition: transform 0.3s ease;
}

.milestone:hover .milestone-icon {
  transform: scale(1.1) rotate(5deg);
}

.milestone-text {
  flex: 1;
}

.milestone-date {
  font-size: 1.1rem;
  font-weight: 600;
  color: red;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.milestone-date i {
  margin-right: 10px;
  font-size: 1.3rem;
}

.milestone-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #fff;
  position: relative;
  display: inline-block;
  font-weight: 700;
}

.milestone-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, red, #fff);
  border-radius: 2px;
}

.milestone-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0e0ff;
  margin-bottom: 20px;
  opacity: 0.9;
}

.milestone-stats {
  display: flex;
  gap: 20px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.stat-item {
  background: black;
  padding: 15px 20px;
  border-radius: 15px;
  text-align: center;
  flex: 1;
  min-width: 120px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
  animation: statAppear 0.5s forwards;
  animation-delay: var(--delay);
}

@keyframes statAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-item:hover {
  background: black;
  box-shadow: 0 8px 20px black;
  transform: translateY(-5px);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: red;
  margin-bottom: 5px;
  line-height: 1;
}

.stat-label {
  font-size: 0.95rem;
  color: #a0a0d0;
  font-weight: 500;
}

/* Marker on timeline */
.milestone::before {
  content: '';
  position: absolute;
  top: 40px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #000;
  border: 4px solid #fff;
  z-index: 10;
  box-shadow: 0 0 0 0 #fff;
  animation: pulse 2s infinite;
}

.milestone.left::before {
  right: -75px;
}

.milestone.right::before {
  left: -75px;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 #fff; }
  70% { box-shadow: 0 0 0 15px #000; }
  100% { box-shadow: 0 0 0 0 #000; }
}

.journey-continues {
  text-align: center;
  padding: 50px 0 30px;
  color: #e0e0ff;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.highlight {
  color: #fff;
  font-weight: 700;
  background: linear-gradient(45deg, red, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sparkle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  font-size: 24px;
}

.sparkle i {
  color: #ffd166;
  opacity: 0;
  animation: sparkle 3s infinite;
}

.sparkle i:nth-child(1) { animation-delay: 0.2s; }
.sparkle i:nth-child(2) { animation-delay: 0.6s; }
.sparkle i:nth-child(3) { animation-delay: 1s; }

@keyframes sparkle {
  0%, 100% { 
    opacity: 0; 
    transform: translateY(0) scale(1);
  }
  50% { 
    opacity: 1; 
    transform: translateY(-20px) scale(1.5);
    text-shadow: 0 0 15px rgba(255, 209, 102, 0.8);
  }
}

/* Responsive design */
@media (max-width: 900px) {
  .timeline-line {
    left: 30px;
  }
  
  .milestone {
    width: calc(100% - 90px);
    margin-left: 60px !important;
    margin-right: 0 !important;
  }
  
  .milestone::before {
    left: -60px !important;
    right: auto !important;
  }
  
  .milestone.left::before,
  .milestone.right::before {
    left: -75px;
    right: auto;
  }
  
  .header h1 {
    font-size: 2.8rem;
  }
}

@media (max-width: 600px) {
  .header h1 {
    font-size: 2.2rem;
  }
  
  .header p {
    font-size: 1rem;
  }
  
  .milestone-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .milestone-icon {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .milestone-title {
    font-size: 1.6rem;
  }
  
  .milestone-stats {
    flex-direction: column;
    gap: 15px;
  }
  
  .stat-item {
    width: 100%;
  }
  
  .journey-continues {
    font-size: 1.1rem;
  }
}
</style>