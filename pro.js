    // Enhanced Database with Email/SMS simulation and Worker management
        class Database {
            constructor() {
                this.users = JSON.parse(localStorage.getItem('homeserve_users') || '[]');
                this.services = JSON.parse(localStorage.getItem('homeserve_services') || '[]');
                this.bookings = JSON.parse(localStorage.getItem('homeserve_bookings') || '[]');
                this.testimonials = JSON.parse(localStorage.getItem('homeserve_testimonials') || '[]');
                this.workers = JSON.parse(localStorage.getItem('homeserve_workers') || '[]');
                this.notifications = JSON.parse(localStorage.getItem('homeserve_notifications') || '[]');
                this.ratings = JSON.parse(localStorage.getItem('homeserve_ratings') || '[]');
                this.currentUser = JSON.parse(localStorage.getItem('homeserve_current_user') || 'null');
                
                if (this.services.length === 0) {
                    this.initializeDefaultData();
                }
            }

            initializeDefaultData() {
                this.services = [
                    {
                        id: 1,
                        name: 'Carpenter',
                        description: 'Furniture repair, custom woodwork, and carpentry services',
                        rate: 450,
                        category: 'repair',
                        icon: 'fas fa-hammer',
                        rating: 4.8,
                        reviews: 124,
                        color: 'blue'
                    },
                    {
                        id: 2,
                        name: 'Electrician',
                        description: 'Electrical repairs, installations, and safety inspections',
                        rate: 650,
                        category: 'repair',
                        icon: 'fas fa-bolt',
                        rating: 4.9,
                        reviews: 89,
                        color: 'yellow'
                    },
                    {
                        id: 3,
                        name: 'House Cleaning',
                        description: 'Professional cleaning services for your home',
                        rate: 350,
                        category: 'cleaning',
                        icon: 'fas fa-broom',
                        rating: 4.7,
                        reviews: 156,
                        color: 'pink'
                    },
                    {
                        id: 4,
                        name: 'Plumber',
                        description: 'Pipe repairs, installations, and emergency services',
                        rate: 550,
                        category: 'repair',
                        icon: 'fas fa-wrench',
                        rating: 4.8,
                        reviews: 98,
                        color: 'blue'
                    },
                    {
                        id: 5,
                        name: 'Personal Chef',
                        description: 'Custom meal preparation and cooking services',
                        rate: 750,
                        category: 'maintenance',
                        icon: 'fas fa-utensils',
                        rating: 4.9,
                        reviews: 67,
                        color: 'green'
                    },
                    {
                        id: 6,
                        name: 'Gardener',
                        description: 'Lawn care, landscaping, and garden maintenance',
                        rate: 400,
                        category: 'maintenance',
                        icon: 'fas fa-seedling',
                        rating: 4.6,
                        reviews: 112,
                        color: 'green'
                    }
                ];

                this.testimonials = [
                    {
                        id: 1,
                        name: 'Sarah Johnson',
                        initial: 'S',
                        color: 'blue',
                        rating: 5,
                        text: 'Amazing service! The electrician arrived on time, was professional, and fixed our electrical issue quickly. Highly recommend HomeServe Pro!'
                    },
                    {
                        id: 2,
                        name: 'Mike Chen',
                        initial: 'M',
                        color: 'green',
                        rating: 5,
                        text: 'The plumber was excellent! Fixed our leak and explained everything clearly. The booking process was so easy through the app.'
                    },
                    {
                        id: 3,
                        name: 'Lisa Rodriguez',
                        initial: 'L',
                        color: 'purple',
                        rating: 5,
                        text: 'Our house cleaner was fantastic! Very thorough and trustworthy. I\'ve booked her for regular cleanings now.'
                    }
                ];

                // Add sample users, workers, and bookings
                this.users = [
                    {
                        id: 1,
                        firstName: 'Admin',
                        lastName: 'User',
                        email: 'admin@homeservepro.com',
                        password: 'admin123',
                        phone: '+91-9999999999',
                        role: 'admin',
                        status: 'active',
                        joinedDate: '2024-01-01'
                    },
                    {
                        id: 2,
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'john@example.com',
                        password: 'password123',
                        phone: '+91-9876543210',
                        role: 'customer',
                        status: 'active',
                        joinedDate: '2024-02-15'
                    }
                ];

                this.workers = [
                    {
                        id: 1,
                        firstName: 'Rajesh',
                        lastName: 'Kumar',
                        email: 'rajesh@worker.com',
                        password: 'worker123',
                        phone: '+91-9876543211',
                        skills: ['Carpentry', 'Furniture Repair'],
                        experience: 5,
                        rating: 4.8,
                        completedJobs: 45,
                        earnings: 67500,
                        status: 'active',
                        joinedDate: '2024-01-15'
                    },
                    {
                        id: 2,
                        firstName: 'Priya',
                        lastName: 'Sharma',
                        email: 'priya@worker.com',
                        password: 'worker123',
                        phone: '+91-9876543212',
                        skills: ['House Cleaning', 'Deep Cleaning'],
                        experience: 3,
                        rating: 4.9,
                        completedJobs: 78,
                        earnings: 89250,
                        status: 'active',
                        joinedDate: '2024-02-01'
                    }
                ];

                this.bookings = [
                    {
                        id: 1001,
                        userId: 2,
                        serviceId: 1,
                        serviceName: 'Carpenter',
                        customerName: 'John Doe',
                        customerPhone: '+91-9876543210',
                        customerEmail: 'john@example.com',
                        workerId: null,
                        workerName: null,
                        date: '2024-04-15',
                        time: '10:00',
                        hours: 3,
                        rate: 450,
                        total: 1350,
                        address: '123 Main St, Mumbai',
                        instructions: 'Fix the dining table',
                        status: 'pending',
                        createdAt: '2024-04-10',
                        rating: null,
                        review: null
                    }
                ];

                this.saveData();
            }

            saveData() {
                localStorage.setItem('homeserve_users', JSON.stringify(this.users));
                localStorage.setItem('homeserve_services', JSON.stringify(this.services));
                localStorage.setItem('homeserve_bookings', JSON.stringify(this.bookings));
                localStorage.setItem('homeserve_testimonials', JSON.stringify(this.testimonials));
                localStorage.setItem('homeserve_workers', JSON.stringify(this.workers));
                localStorage.setItem('homeserve_notifications', JSON.stringify(this.notifications));
                localStorage.setItem('homeserve_ratings', JSON.stringify(this.ratings));
                localStorage.setItem('homeserve_current_user', JSON.stringify(this.currentUser));
            }

            // Email/SMS simulation
            sendEmail(to, subject, body) {
                console.log(`📧 EMAIL SENT TO: ${to}`);
                console.log(`📧 SUBJECT: ${subject}`);
                console.log(`📧 BODY: ${body}`);
                
                // Add notification
                this.addNotification(to, 'email', subject, body);
                return true;
            }

            sendSMS(to, message) {
                console.log(`📱 SMS SENT TO: ${to}`);
                console.log(`📱 MESSAGE: ${message}`);
                
                // Add notification
                this.addNotification(to, 'sms', 'SMS Notification', message);
                return true;
            }

            addNotification(recipient, type, title, message) {
                const notification = {
                    id: this.notifications.length + 1,
                    recipient: recipient,
                    type: type,
                    title: title,
                    message: message,
                    timestamp: new Date().toISOString(),
                    read: false
                };
                this.notifications.push(notification);
                this.saveData();
                updateNotificationBell();
            }

            // User methods
            registerUser(userData) {
                const newUser = {
                    id: this.users.length + 1,
                    ...userData,
                    role: 'customer',
                    status: 'active',
                    joinedDate: new Date().toISOString().split('T')[0]
                };
                this.users.push(newUser);
                
                // Send welcome email
                this.sendEmail(
                    newUser.email,
                    'Welcome to HomeServe Pro!',
                    `Hi ${newUser.firstName}, welcome to HomeServe Pro! Your account has been created successfully. You can now book services from our platform.`
                );
                
                this.saveData();
                return newUser;
            }

            registerWorker(workerData) {
                const newWorker = {
                    id: this.workers.length + 1,
                    ...workerData,
                    skills: workerData.skills.split(',').map(s => s.trim()),
                    rating: 0,
                    completedJobs: 0,
                    earnings: 0,
                    status: 'active',
                    joinedDate: new Date().toISOString().split('T')[0]
                };
                this.workers.push(newWorker);
                
                // Send welcome email
                this.sendEmail(
                    newWorker.email,
                    'Welcome to HomeServe Pro - Worker Panel!',
                    `Hi ${newWorker.firstName}, welcome to HomeServe Pro as a service provider! Your worker account has been created. You can now start accepting jobs.`
                );
                
                this.saveData();
                return newWorker;
            }

            loginUser(email, password) {
                const user = this.users.find(u => u.email === email && u.password === password);
                const worker = this.workers.find(w => w.email === email && w.password === password);
                
                if (user) {
                    this.currentUser = { ...user, type: 'user' };
                    this.saveData();
                    return this.currentUser;
                } else if (worker) {
                    this.currentUser = { ...worker, type: 'worker' };
                    this.saveData();
                    return this.currentUser;
                }
                return null;
            }

            logoutUser() {
                this.currentUser = null;
                this.saveData();
            }

            // Booking methods
            createBooking(bookingData) {
                const service = this.services.find(s => s.name === bookingData.service);
                const newBooking = {
                    id: 1000 + this.bookings.length + 1,
                    userId: this.currentUser ? this.currentUser.id : null,
                    serviceId: service ? service.id : null,
                    serviceName: bookingData.service,
                    customerName: this.currentUser ? `${this.currentUser.firstName} ${this.currentUser.lastName}` : 'Guest',
                    customerPhone: this.currentUser ? this.currentUser.phone : '',
                    customerEmail: this.currentUser ? this.currentUser.email : '',
                    workerId: null,
                    workerName: null,
                    date: bookingData.date,
                    time: bookingData.time,
                    hours: parseInt(bookingData.hours),
                    rate: service ? service.rate : 0,
                    total: parseInt(bookingData.hours) * (service ? service.rate : 0),
                    address: bookingData.address,
                    instructions: bookingData.instructions || '',
                    status: 'pending',
                    createdAt: new Date().toISOString().split('T')[0],
                    rating: null,
                    review: null
                };
                this.bookings.push(newBooking);
                
                // Send confirmation email and SMS
                if (this.currentUser) {
                    this.sendEmail(
                        this.currentUser.email,
                        'Booking Confirmation - HomeServe Pro',
                        `Hi ${this.currentUser.firstName}, your booking for ${bookingData.service} on ${bookingData.date} at ${bookingData.time} has been confirmed. Booking ID: #${newBooking.id}. Total: ₹${newBooking.total}`
                    );
                    
                    this.sendSMS(
                        this.currentUser.phone,
                        `HomeServe Pro: Your ${bookingData.service} booking (#${newBooking.id}) for ${bookingData.date} at ${bookingData.time} is confirmed. Total: ₹${newBooking.total}`
                    );
                }
                
                // Notify available workers
                this.notifyAvailableWorkers(newBooking);
                
                this.saveData();
                return newBooking;
            }

            notifyAvailableWorkers(booking) {
                const availableWorkers = this.workers.filter(w => 
                    w.status === 'active' && 
                    w.skills.some(skill => booking.serviceName.toLowerCase().includes(skill.toLowerCase()))
                );
                
                availableWorkers.forEach(worker => {
                    this.sendEmail(
                        worker.email,
                        'New Job Available - HomeServe Pro',
                        `Hi ${worker.firstName}, a new ${booking.serviceName} job is available on ${booking.date} at ${booking.time}. Location: ${booking.address}. Payment: ₹${booking.total}. Login to accept this job.`
                    );
                    
                    this.sendSMS(
                        worker.phone,
                        `New job: ${booking.serviceName} on ${booking.date} at ${booking.time}. ₹${booking.total}. Login to HomeServe Pro to accept.`
                    );
                });
            }

            assignWorkerToBooking(bookingId, workerId) {
                const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
                const worker = this.workers.find(w => w.id === workerId);
                
                if (bookingIndex !== -1 && worker) {
                    this.bookings[bookingIndex].workerId = workerId;
                    this.bookings[bookingIndex].workerName = `${worker.firstName} ${worker.lastName}`;
                    this.bookings[bookingIndex].status = 'assigned';
                    
                    const booking = this.bookings[bookingIndex];
                    
                    // Notify customer
                    this.sendEmail(
                        booking.customerEmail,
                        'Worker Assigned - HomeServe Pro',
                        `Hi ${booking.customerName}, ${worker.firstName} ${worker.lastName} has been assigned to your ${booking.serviceName} booking on ${booking.date}. Worker contact: ${worker.phone}`
                    );
                    
                    this.sendSMS(
                        booking.customerPhone,
                        `HomeServe Pro: ${worker.firstName} assigned to your ${booking.serviceName} booking on ${booking.date}. Contact: ${worker.phone}`
                    );
                    
                    // Notify worker
                    this.sendEmail(
                        worker.email,
                        'Job Assigned - HomeServe Pro',
                        `Hi ${worker.firstName}, you have been assigned to a ${booking.serviceName} job on ${booking.date} at ${booking.time}. Customer: ${booking.customerName}, Phone: ${booking.customerPhone}, Address: ${booking.address}`
                    );
                    
                    this.saveData();
                    return booking;
                }
                return null;
            }

            updateBookingStatus(id, status) {
                const index = this.bookings.findIndex(b => b.id === id);
                if (index !== -1) {
                    const oldStatus = this.bookings[index].status;
                    this.bookings[index].status = status;
                    
                    const booking = this.bookings[index];
                    
                    // Send status update notifications
                    if (status === 'confirmed') {
                        this.sendEmail(
                            booking.customerEmail,
                            'Booking Confirmed - HomeServe Pro',
                            `Hi ${booking.customerName}, your ${booking.serviceName} booking has been confirmed for ${booking.date} at ${booking.time}.`
                        );
                    } else if (status === 'completed') {
                        this.sendEmail(
                            booking.customerEmail,
                            'Service Completed - HomeServe Pro',
                            `Hi ${booking.customerName}, your ${booking.serviceName} service has been completed. Please rate your experience.`
                        );
                        
                        // Update worker earnings
                        if (booking.workerId) {
                            const workerIndex = this.workers.findIndex(w => w.id === booking.workerId);
                            if (workerIndex !== -1) {
                                this.workers[workerIndex].completedJobs += 1;
                                this.workers[workerIndex].earnings += booking.total;
                            }
                        }
                    } else if (status === 'cancelled') {
                        this.sendEmail(
                            booking.customerEmail,
                            'Booking Cancelled - HomeServe Pro',
                            `Hi ${booking.customerName}, your ${booking.serviceName} booking has been cancelled. If you have any questions, please contact support.`
                        );
                    }
                    
                    this.saveData();
                    return this.bookings[index];
                }
                return null;
            }

            cancelBooking(bookingId, reason) {
                const booking = this.updateBookingStatus(bookingId, 'cancelled');
                if (booking) {
                    // Notify worker if assigned
                    if (booking.workerId) {
                        const worker = this.workers.find(w => w.id === booking.workerId);
                        if (worker) {
                            this.sendEmail(
                                worker.email,
                                'Job Cancelled - HomeServe Pro',
                                `Hi ${worker.firstName}, the ${booking.serviceName} job scheduled for ${booking.date} has been cancelled by the customer. Reason: ${reason}`
                            );
                        }
                    }
                }
                return booking;
            }

            // Rating system
            addRating(bookingId, rating, review) {
                const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
                if (bookingIndex !== -1) {
                    this.bookings[bookingIndex].rating = rating;
                    this.bookings[bookingIndex].review = review;
                    
                    const booking = this.bookings[bookingIndex];
                    
                    // Update worker rating
                    if (booking.workerId) {
                        const workerIndex = this.workers.findIndex(w => w.id === booking.workerId);
                        if (workerIndex !== -1) {
                            const worker = this.workers[workerIndex];
                            const totalRatings = this.bookings.filter(b => b.workerId === worker.id && b.rating).length;
                            const sumRatings = this.bookings.filter(b => b.workerId === worker.id && b.rating).reduce((sum, b) => sum + b.rating, 0);
                            worker.rating = totalRatings > 0 ? (sumRatings / totalRatings).toFixed(1) : 0;
                        }
                    }
                    
                    this.saveData();
                    return booking;
                }
                return null;
            }

            // Analytics methods
            getStats() {
                return {
                    totalUsers: this.users.length,
                    totalWorkers: this.workers.length,
                    totalBookings: this.bookings.length,
                    totalRevenue: this.bookings.filter(b => b.status === 'completed').reduce((sum, booking) => sum + booking.total, 0),
                    totalServices: this.services.length,
                    totalCustomers: this.users.filter(u => u.role === 'customer').length,
                    totalProviders: this.workers.length
                };
            }

            getWorkerStats(workerId) {
                const worker = this.workers.find(w => w.id === workerId);
                if (!worker) return null;
                
                const workerBookings = this.bookings.filter(b => b.workerId === workerId);
                return {
                    activeJobs: workerBookings.filter(b => ['assigned', 'confirmed'].includes(b.status)).length,
                    completedJobs: workerBookings.filter(b => b.status === 'completed').length,
                    earnings: workerBookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + b.total, 0),
                    rating: worker.rating || 0
                };
            }

            getAvailableJobsForWorker(workerId) {
                const worker = this.workers.find(w => w.id === workerId);
                if (!worker) return [];
                
                return this.bookings.filter(booking => 
                    booking.status === 'pending' && 
                    worker.skills.some(skill => booking.serviceName.toLowerCase().includes(skill.toLowerCase()))
                );
            }

            getWorkerJobs(workerId) {
                return this.bookings.filter(b => b.workerId === workerId);
            }

            getUserNotifications(email) {
                return this.notifications.filter(n => n.recipient === email).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            }

            // Service management methods
            getServices() {
                return this.services;
            }

            getBookings() {
                return this.bookings;
            }

            addService(serviceData) {
                const newService = {
                    id: this.services.length + 1,
                    ...serviceData,
                    rating: 4.5,
                    reviews: 0,
                    color: 'blue'
                };
                this.services.push(newService);
                this.saveData();
                return newService;
            }

            deleteService(serviceId) {
                this.services = this.services.filter(s => s.id !== serviceId);
                this.saveData();
            }
        }

        // Initialize database
        const db = new Database();

        // Global variables
        let currentAuthMode = 'login';
        let currentService = '';
        let currentRate = 0;

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            loadServices();
            loadTestimonials();
            updateStats();
            updateAuthUI();
            loadAdminData();
            updateNotificationBell();
            loadCustomerBookings();
            loadWorkerData();
            initializeRatingStars();
        });

        // Authentication functions
        function updateAuthUI() {
            const loginBtn = document.getElementById('loginBtn');
            const signupBtn = document.getElementById('signupBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            const userWelcome = document.getElementById('userWelcome');

            if (db.currentUser) {
                loginBtn.classList.add('hidden');
                signupBtn.classList.add('hidden');
                logoutBtn.classList.remove('hidden');
                userWelcome.classList.remove('hidden');
                userWelcome.textContent = `Welcome, ${db.currentUser.firstName}!`;
                
                // Show/hide sections based on user type
                if (db.currentUser.type === 'worker') {
                    document.getElementById('myBookings').style.display = 'none';
                } else {
                    document.getElementById('myBookings').style.display = 'block';
                }
            } else {
                loginBtn.classList.remove('hidden');
                signupBtn.classList.remove('hidden');
                logoutBtn.classList.add('hidden');
                userWelcome.classList.add('hidden');
                document.getElementById('myBookings').style.display = 'none';
            }
        }

        function logout() {
            db.logoutUser();
            updateAuthUI();
            showSuccessMessage('Logged out successfully!');
            loadCustomerBookings();
            loadWorkerData();
        }

        function openAuthModal(mode) {
            currentAuthMode = mode;
            const modal = document.getElementById('authModal');
            const title = document.getElementById('authTitle');
            const submitBtn = document.getElementById('authSubmitBtn');
            const toggle = document.getElementById('authToggle');
            const signupFields = document.getElementById('signupFields');
            const workerFields = document.getElementById('workerFields');
            
            if (mode === 'login') {
                title.textContent = 'Login';
                submitBtn.textContent = 'Login';
                toggle.textContent = "Don't have an account? Sign up";
                signupFields.classList.add('hidden');
                workerFields.classList.add('hidden');
            } else if (mode === 'signup') {
                title.textContent = 'Sign Up as Customer';
                submitBtn.textContent = 'Sign Up';
                toggle.textContent = 'Already have an account? Login';
                signupFields.classList.remove('hidden');
                workerFields.classList.add('hidden');
            } else if (mode === 'worker') {
                title.textContent = 'Join as Worker';
                submitBtn.textContent = 'Register as Worker';
                toggle.textContent = 'Already have an account? Login';
                signupFields.classList.remove('hidden');
                workerFields.classList.remove('hidden');
            }
            
            modal.classList.remove('hidden');
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.add('hidden');
            document.getElementById('authForm').reset();
        }

        function toggleAuthMode() {
            if (currentAuthMode === 'login') {
                openAuthModal('signup');
            } else {
                openAuthModal('login');
            }
        }

        function submitAuthForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            if (currentAuthMode === 'login') {
                const email = formData.get('email');
                const password = formData.get('password');
                const user = db.loginUser(email, password);
                
                if (user) {
                    closeAuthModal();
                    updateAuthUI();
                    loadCustomerBookings();
                    loadWorkerData();
                    updateNotificationBell();
                    showSuccessMessage(`Welcome back, ${user.firstName}!`);
                } else {
                    alert('Invalid email or password!');
                }
            } else if (currentAuthMode === 'worker') {
                const workerData = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    phone: formData.get('phone'),
                    skills: formData.get('skills'),
                    experience: formData.get('experience')
                };
                
                if (db.users.find(u => u.email === workerData.email) || db.workers.find(w => w.email === workerData.email)) {
                    alert('User with this email already exists!');
                    return;
                }
                
                const newWorker = db.registerWorker(workerData);
                db.loginUser(workerData.email, workerData.password);
                closeAuthModal();
                updateAuthUI();
                loadWorkerData();
                showSuccessMessage(`Welcome to HomeServe Pro, ${newWorker.firstName}! You can now start accepting jobs.`);
            } else {
                const userData = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    phone: formData.get('phone')
                };
                
                if (db.users.find(u => u.email === userData.email) || db.workers.find(w => w.email === userData.email)) {
                    alert('User with this email already exists!');
                    return;
                }
                
                const newUser = db.registerUser(userData);
                db.loginUser(userData.email, userData.password);
                closeAuthModal();
                updateAuthUI();
                showSuccessMessage(`Welcome to HomeServe Pro, ${newUser.firstName}!`);
            }
        }

        // Service functions
        function loadServices() {
            const servicesGrid = document.getElementById('servicesGrid');
            const services = db.getServices();
            
            servicesGrid.innerHTML = services.map(service => `
                <div class="service-card bg-white rounded-xl shadow-lg p-8 text-center border hover:shadow-xl transition duration-300" data-category="${service.category}">
                    <div class="bg-${service.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="${service.icon} text-3xl text-${service.color}-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">${service.name}</h3>
                    <p class="text-gray-600 mb-6">${service.description}</p>
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-2xl font-bold text-blue-600">₹${service.rate}/hr</span>
                        <div class="flex items-center">
                            <i class="fas fa-star text-yellow-400"></i>
                            <span class="ml-1 text-gray-600">${service.rating} (${service.reviews})</span>
                        </div>
                    </div>
                    <button onclick="openBookingModal('${service.name}', ${service.rate})" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Book Now</button>
                </div>
            `).join('');
        }

        function loadTestimonials() {
            const testimonialsGrid = document.getElementById('testimonialsGrid');
            const testimonials = db.testimonials;
            
            testimonialsGrid.innerHTML = testimonials.map(testimonial => `
                <div class="testimonial-card rounded-xl p-8 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-${testimonial.color}-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            ${testimonial.initial}
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">${testimonial.name}</h4>
                            <div class="flex text-yellow-400">
                                ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"${testimonial.text}"</p>
                </div>
            `).join('');
        }

        function updateStats() {
            const stats = db.getStats();
            
            document.getElementById('totalCustomers').textContent = `${stats.totalCustomers}+`;
            document.getElementById('totalProviders').textContent = `${stats.totalProviders}+`;
            document.getElementById('totalBookings').textContent = `${stats.totalBookings}+`;
        }

        // Helper function to get worker phone
        function getWorkerPhone(workerId) {
            if (!workerId) return 'Not available';
            const worker = db.workers.find(w => w.id === workerId);
            return worker ? worker.phone : 'Not available';
        }

        // Customer booking functions
        function loadCustomerBookings() {
            const container = document.getElementById('customerBookings');
            
            if (!db.currentUser || db.currentUser.type === 'worker') {
                container.innerHTML = '<p class="text-center text-gray-600">Please login as a customer to view your bookings.</p>';
                return;
            }
            
            const userBookings = db.bookings.filter(b => b.userId === db.currentUser.id);
            
            if (userBookings.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-600">No bookings found. Book a service to get started!</p>';
                return;
            }
            
            container.innerHTML = userBookings.map(booking => `
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">${booking.serviceName}</h3>
                            <p class="text-gray-600">Booking ID: #${booking.id}</p>
                        </div>
                        <span class="status-${booking.status} font-medium capitalize px-3 py-1 rounded-full bg-gray-100">${booking.status}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p class="text-gray-600"><i class="fas fa-calendar mr-2"></i>${booking.date} at ${booking.time}</p>
                            <p class="text-gray-600"><i class="fas fa-clock mr-2"></i>${booking.hours} hours</p>
                            <p class="text-gray-600"><i class="fas fa-rupee-sign mr-2"></i>₹${booking.total}</p>
                        </div>
                        <div>
                            <p class="text-gray-600"><i class="fas fa-map-marker-alt mr-2"></i>${booking.address}</p>
                            ${booking.workerName ? `
                                <p class="text-gray-600"><i class="fas fa-user mr-2"></i>Worker: ${booking.workerName}</p>
                                <p class="text-gray-600"><i class="fas fa-phone mr-2"></i>Contact: ${getWorkerPhone(booking.workerId)}</p>
                            ` : ''}
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        ${booking.status === 'pending' || booking.status === 'assigned' ? 
                            `<button onclick="cancelBooking(${booking.id})" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">Cancel Booking</button>` : ''
                        }
                        ${booking.status === 'completed' && !booking.rating ? 
                            `<button onclick="openRatingModal(${booking.id})" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Rate Service</button>` : ''
                        }
                        ${booking.rating ? 
                            `<div class="flex items-center">
                                <span class="text-gray-600 mr-2">Your Rating:</span>
                                <div class="flex text-yellow-400">
                                    ${Array(booking.rating).fill('<i class="fas fa-star"></i>').join('')}
                                </div>
                            </div>` : ''
                        }
                    </div>
                </div>
            `).join('');
        }

        function cancelBooking(bookingId) {
            const reason = prompt('Please provide a reason for cancellation:');
            if (reason) {
                db.cancelBooking(bookingId, reason);
                loadCustomerBookings();
                loadAdminData();
                showSuccessMessage('Booking cancelled successfully!');
            }
        }

        // Worker functions
        function loadWorkerData() {
            if (!db.currentUser || db.currentUser.type !== 'worker') {
                return;
            }
            
            const stats = db.getWorkerStats(db.currentUser.id);
            if (stats) {
                document.getElementById('workerActiveJobs').textContent = stats.activeJobs;
                document.getElementById('workerCompletedJobs').textContent = stats.completedJobs;
                document.getElementById('workerEarnings').textContent = `₹${stats.earnings.toLocaleString()}`;
                document.getElementById('workerRating').textContent = stats.rating;
            }
            
            loadAvailableJobs();
            loadMyJobs();
        }

        function loadAvailableJobs() {
            const container = document.getElementById('availableJobs');
            
            if (!db.currentUser || db.currentUser.type !== 'worker') {
                container.innerHTML = '<p class="text-center text-gray-400">Please login as a worker to view available jobs.</p>';
                return;
            }
            
            const availableJobs = db.getAvailableJobsForWorker(db.currentUser.id);
            
            if (availableJobs.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-400">No jobs available at the moment.</p>';
                return;
            }
            
            container.innerHTML = availableJobs.map(job => `
                <div class="bg-white bg-opacity-10 rounded-lg p-4">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-bold text-lg">${job.serviceName}</h4>
                        <span class="text-green-400 font-bold">₹${job.total}</span>
                    </div>
                    <p class="text-sm opacity-80 mb-2">${job.date} at ${job.time} • ${job.hours} hours</p>
                    <p class="text-sm opacity-80 mb-2">${job.address}</p>
                    <p class="text-sm opacity-80 mb-4">Customer: ${job.customerName}</p>
                    <button onclick="acceptJob(${job.id})" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Accept Job</button>
                </div>
            `).join('');
        }

        function loadMyJobs() {
            const container = document.getElementById('myJobs');
            
            if (!db.currentUser || db.currentUser.type !== 'worker') {
                container.innerHTML = '<p class="text-center text-gray-400">Please login as a worker to view your jobs.</p>';
                return;
            }
            
            const myJobs = db.getWorkerJobs(db.currentUser.id);
            
            if (myJobs.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-400">No jobs assigned yet.</p>';
                return;
            }
            
            container.innerHTML = myJobs.map(job => `
                <div class="bg-white bg-opacity-10 rounded-lg p-4">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-bold text-lg">${job.serviceName}</h4>
                        <span class="status-${job.status} font-medium capitalize">${job.status}</span>
                    </div>
                    <p class="text-sm opacity-80 mb-2">${job.date} at ${job.time} • ${job.hours} hours • ₹${job.total}</p>
                    <p class="text-sm opacity-80 mb-2">${job.address}</p>
                    <p class="text-sm opacity-80 mb-4">Customer: ${job.customerName} • ${job.customerPhone}</p>
                    ${job.status === 'assigned' ? 
                        `<button onclick="updateJobStatus(${job.id}, 'confirmed')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mr-2">Confirm Job</button>` : ''
                    }
                    ${job.status === 'confirmed' ? 
                        `<button onclick="updateJobStatus(${job.id}, 'completed')" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Mark Complete</button>` : ''
                    }
                </div>
            `).join('');
        }

        function acceptJob(jobId) {
            if (confirm('Are you sure you want to accept this job?')) {
                db.assignWorkerToBooking(jobId, db.currentUser.id);
                loadAvailableJobs();
                loadMyJobs();
                loadWorkerData();
                loadAdminData();
                showSuccessMessage('Job accepted successfully!');
            }
        }

        function updateJobStatus(jobId, status) {
            db.updateBookingStatus(jobId, status);
            loadMyJobs();
            loadWorkerData();
            loadAdminData();
            loadCustomerBookings();
            showSuccessMessage(`Job status updated to ${status}!`);
        }

        // Rating functions
        function initializeRatingStars() {
            document.querySelectorAll('.rating-star').forEach(star => {
                star.addEventListener('click', function() {
                    const rating = parseInt(this.dataset.rating);
                    document.getElementById('selectedRating').value = rating;
                    
                    // Update star display
                    document.querySelectorAll('.rating-star').forEach((s, index) => {
                        if (index < rating) {
                            s.classList.remove('text-gray-300');
                            s.classList.add('text-yellow-400');
                        } else {
                            s.classList.remove('text-yellow-400');
                            s.classList.add('text-gray-300');
                        }
                    });
                });
            });
        }

        function openRatingModal(bookingId) {
            document.getElementById('ratingBookingId').value = bookingId;
            document.getElementById('ratingModal').classList.remove('hidden');
        }

        function closeRatingModal() {
            document.getElementById('ratingModal').classList.add('hidden');
            document.getElementById('ratingForm').reset();
            document.getElementById('selectedRating').value = '0';
            
            // Reset stars
            document.querySelectorAll('.rating-star').forEach(star => {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-gray-300');
            });
        }

        function submitRating(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const rating = parseInt(formData.get('rating'));
            const review = formData.get('review');
            const bookingId = parseInt(formData.get('bookingId'));
            
            if (rating === 0) {
                alert('Please select a rating!');
                return;
            }
            
            db.addRating(bookingId, rating, review);
            closeRatingModal();
            loadCustomerBookings();
            loadAdminData();
            showSuccessMessage('Thank you for your rating!');
        }

        // Notification functions
        function updateNotificationBell() {
            if (!db.currentUser) return;
            
            const notifications = db.getUserNotifications(db.currentUser.email);
            const unreadCount = notifications.filter(n => !n.read).length;
            
            const countElement = document.getElementById('notificationCount');
            if (unreadCount > 0) {
                countElement.textContent = unreadCount;
                countElement.classList.remove('hidden');
            } else {
                countElement.classList.add('hidden');
            }
        }

        function showNotifications() {
            if (!db.currentUser) return;
            
            const panel = document.getElementById('notificationsPanel');
            const list = document.getElementById('notificationsList');
            
            const notifications = db.getUserNotifications(db.currentUser.email);
            
            if (notifications.length === 0) {
                list.innerHTML = '<p class="text-gray-500 text-center">No notifications</p>';
            } else {
                list.innerHTML = notifications.slice(0, 10).map(notification => `
                    <div class="border-b border-gray-200 pb-3 mb-3 last:border-b-0">
                        <div class="flex items-start">
                            <i class="fas fa-${notification.type === 'email' ? 'envelope' : 'sms'} text-blue-500 mt-1 mr-3"></i>
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-800 text-sm">${notification.title}</h4>
                                <p class="text-gray-600 text-xs mt-1">${notification.message}</p>
                                <p class="text-gray-400 text-xs mt-2">${new Date(notification.timestamp).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            panel.classList.toggle('hidden');
            
            // Mark notifications as read
            notifications.forEach(n => n.read = true);
            db.saveData();
            updateNotificationBell();
        }

        // Booking functions
        function openBookingModal(service, rate) {
            if (!db.currentUser) {
                alert('Please login to book a service!');
                openAuthModal('login');
                return;
            }
            
            if (db.currentUser.type === 'worker') {
                alert('Workers cannot book services. Please login as a customer!');
                return;
            }
            
            currentService = service;
            currentRate = rate;
            
            const modal = document.getElementById('bookingModal');
            const title = document.getElementById('bookingTitle');
            const serviceInput = document.getElementById('serviceType');
            const hourlyRateSpan = document.getElementById('hourlyRate');
            
            title.textContent = `Book ${service}`;
            serviceInput.value = service;
            hourlyRateSpan.textContent = `₹${rate}`;
            
            // Set minimum date to today
            const dateInput = modal.querySelector('input[type="date"]');
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            
            modal.classList.remove('hidden');
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
            document.getElementById('bookingForm').reset();
            updateTotal();
        }

        function updateTotal() {
            const hoursSelect = document.getElementById('hoursSelect');
            const totalHoursSpan = document.getElementById('totalHours');
            const totalCostSpan = document.getElementById('totalCost');
            
            const hours = parseInt(hoursSelect.value) || 0;
            const total = hours * currentRate;
            
            totalHoursSpan.textContent = hours;
            totalCostSpan.textContent = `₹${total}`;
        }

        function submitBookingForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            const bookingData = {
                service: currentService,
                date: formData.get('date'),
                time: formData.get('time'),
                hours: formData.get('hours'),
                address: formData.get('address'),
                instructions: formData.get('instructions')
            };
            
            const booking = db.createBooking(bookingData);
            closeBookingModal();
            loadAdminData();
            loadCustomerBookings();
            updateStats();
            updateNotificationBell();
            showSuccessMessage('Your service has been booked successfully! You\'ll receive confirmation via email and SMS.');
        }

        // Admin functions
        function loadAdminData() {
            const stats = db.getStats();
            
            // Update admin stats
            document.getElementById('adminTotalUsers').textContent = stats.totalUsers + stats.totalWorkers;
            document.getElementById('adminTotalBookings').textContent = stats.totalBookings;
            document.getElementById('adminTotalRevenue').textContent = `₹${stats.totalRevenue.toLocaleString()}`;
            document.getElementById('adminTotalServices').textContent = stats.totalServices;
            
            // Load tables
            loadBookingsTable();
            loadUsersTable();
            loadAdminServices();
            loadWorkersTable();
        }

        function loadBookingsTable() {
            const tbody = document.getElementById('bookingsTableBody');
            const bookings = db.getBookings();
            
            tbody.innerHTML = bookings.map(booking => `
                <tr class="border-b border-white border-opacity-10">
                    <td class="p-4">#${booking.id}</td>
                    <td class="p-4">${booking.customerName}</td>
                    <td class="p-4">${booking.serviceName}</td>
                    <td class="p-4">${booking.workerName || 'Not Assigned'}</td>
                    <td class="p-4">${booking.date} ${booking.time}</td>
                    <td class="p-4">₹${booking.total}</td>
                    <td class="p-4">
                        <span class="status-${booking.status} font-medium capitalize">${booking.status}</span>
                    </td>
                    <td class="p-4">
                        <select onchange="updateBookingStatus(${booking.id}, this.value)" class="bg-white bg-opacity-20 text-white rounded px-2 py-1">
                            <option value="pending" ${booking.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="assigned" ${booking.status === 'assigned' ? 'selected' : ''}>Assigned</option>
                            <option value="confirmed" ${booking.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                            <option value="completed" ${booking.status === 'completed' ? 'selected' : ''}>Completed</option>
                            <option value="cancelled" ${booking.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                    </td>
                </tr>
            `).join('');
        }

        function loadUsersTable() {
            const tbody = document.getElementById('usersTableBody');
            const users = db.users;
            
            tbody.innerHTML = users.map(user => `
                <tr class="border-b border-white border-opacity-10">
                    <td class="p-4">#${user.id}</td>
                    <td class="p-4">${user.firstName} ${user.lastName}</td>
                    <td class="p-4">${user.email}</td>
                    <td class="p-4">
                        <span class="capitalize font-medium ${user.role === 'admin' ? 'text-yellow-400' : 'text-green-400'}">${user.role}</span>
                    </td>
                    <td class="p-4">${user.joinedDate}</td>
                    <td class="p-4">
                        <span class="text-green-400 font-medium capitalize">${user.status}</span>
                    </td>
                    <td class="p-4">
                        <button onclick="toggleUserStatus(${user.id})" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            ${user.status === 'active' ? 'Deactivate' : 'Activate'}
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        function loadWorkersTable() {
            const tbody = document.getElementById('workersTableBody');
            const workers = db.workers;
            
            tbody.innerHTML = workers.map(worker => `
                <tr class="border-b border-white border-opacity-10">
                    <td class="p-4">#${worker.id}</td>
                    <td class="p-4">${worker.firstName} ${worker.lastName}</td>
                    <td class="p-4">${worker.skills.join(', ')}</td>
                    <td class="p-4">${worker.rating}★</td>
                    <td class="p-4">${worker.completedJobs}</td>
                    <td class="p-4">₹${worker.earnings.toLocaleString()}</td>
                    <td class="p-4">
                        <span class="text-green-400 font-medium capitalize">${worker.status}</span>
                    </td>
                    <td class="p-4">
                        <button onclick="toggleWorkerStatus(${worker.id})" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            ${worker.status === 'active' ? 'Deactivate' : 'Activate'}
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        function loadAdminServices() {
            const grid = document.getElementById('adminServicesGrid');
            const services = db.getServices();
            
            grid.innerHTML = services.map(service => `
                <div class="bg-white bg-opacity-10 rounded-xl p-6">
                    <div class="flex justify-between items-start mb-4">
                        <div class="bg-${service.color}-100 w-12 h-12 rounded-full flex items-center justify-center">
                            <i class="${service.icon} text-xl text-${service.color}-600"></i>
                        </div>
                        <div class="flex space-x-2">
                            <button onclick="editService(${service.id})" class="text-blue-300 hover:text-blue-100">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteService(${service.id})" class="text-red-300 hover:text-red-100">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <h4 class="font-bold text-lg mb-2">${service.name}</h4>
                    <p class="text-sm opacity-80 mb-4">${service.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold">₹${service.rate}/hr</span>
                        <span class="text-sm opacity-80">${service.reviews} reviews</span>
                    </div>
                </div>
            `).join('');
        }

        function showAdminTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.admin-tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Show selected tab
            document.getElementById(tabName + 'Tab').classList.remove('hidden');
            
            // Update tab buttons
            document.querySelectorAll('.admin-tab-btn').forEach(btn => {
                btn.classList.remove('border-white');
                btn.classList.add('border-transparent', 'opacity-60');
            });
            
            event.target.classList.add('border-white');
            event.target.classList.remove('border-transparent', 'opacity-60');
        }

        function updateBookingStatus(bookingId, status) {
            db.updateBookingStatus(bookingId, status);
            loadBookingsTable();
            loadCustomerBookings();
            loadWorkerData();
            showSuccessMessage(`Booking status updated to ${status}!`);
        }

        function filterBookings() {
            const filter = document.getElementById('bookingStatusFilter').value;
            const rows = document.querySelectorAll('#bookingsTableBody tr');
            
            rows.forEach(row => {
                const statusCell = row.querySelector('.status-pending, .status-assigned, .status-confirmed, .status-completed, .status-cancelled');
                if (filter === 'all' || statusCell.classList.contains(`status-${filter}`)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        // Service management
        function openAddServiceModal() {
            document.getElementById('addServiceModal').classList.remove('hidden');
        }

        function closeAddServiceModal() {
            document.getElementById('addServiceModal').classList.add('hidden');
            document.getElementById('addServiceForm').reset();
        }

        function submitAddServiceForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            const serviceData = {
                name: formData.get('name'),
                description: formData.get('description'),
                rate: parseInt(formData.get('rate')),
                category: formData.get('category'),
                icon: formData.get('icon')
            };
            
            db.addService(serviceData);
            closeAddServiceModal();
            loadServices();
            loadAdminServices();
            updateStats();
            showSuccessMessage('Service added successfully!');
        }

        function deleteService(serviceId) {
            if (confirm('Are you sure you want to delete this service?')) {
                db.deleteService(serviceId);
                loadServices();
                loadAdminServices();
                updateStats();
                showSuccessMessage('Service deleted successfully!');
            }
        }

        // Utility functions
        function showSuccessMessage(message) {
            document.getElementById('successMessage').textContent = message;
            document.getElementById('successModal').classList.remove('hidden');
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
        }

        // Search and filter functions
        function searchServices() {
            const searchTerm = document.getElementById('serviceSearch').value.toLowerCase();
            const serviceCards = document.querySelectorAll('.service-card');
            
            serviceCards.forEach(card => {
                const serviceName = card.querySelector('h3').textContent.toLowerCase();
                const serviceDesc = card.querySelector('p').textContent.toLowerCase();
                
                if (serviceName.includes(searchTerm) || serviceDesc.includes(searchTerm)) {
                    card.style.display = 'block';
                    if (searchTerm) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            
            if (!searchTerm) {
                serviceCards.forEach(card => {
                    card.style.display = 'block';
                });
            }
        }

        function filterServices(category) {
            const serviceCards = document.querySelectorAll('.service-card');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            filterBtns.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            event.target.classList.remove('bg-gray-200', 'text-gray-700');
            event.target.classList.add('bg-blue-600', 'text-white');
            
            serviceCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Contact form
        function submitContactForm(event) {
            event.preventDefault();
            showSuccessMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
            document.getElementById('contactForm').reset();
        }

        // Mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Smooth scrolling
        function scrollToServices() {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close modals and panels when clicking outside
        window.addEventListener('click', function(event) {
            const modals = ['authModal', 'bookingModal', 'successModal', 'addServiceModal', 'ratingModal'];
            modals.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (event.target === modal) {
                    modal.classList.add('hidden');
                }
            });
            
            // Close notifications panel
            const notificationsPanel = document.getElementById('notificationsPanel');
            const notificationBell = document.getElementById('notificationBell');
            if (!notificationBell.contains(event.target) && !notificationsPanel.contains(event.target)) {
                notificationsPanel.classList.add('hidden');
            }
        });