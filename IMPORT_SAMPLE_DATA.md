# Import Sample Project Data

This guide will help you import the sample project data into your Strapi CMS.

## 📁 Files Created

- **`sample-projects.json`** - Contains 5 sample projects with realistic data
- **`src/api/project/content-types/project/schema.json`** - Projects content type schema

## 🚀 Quick Setup Steps

### 1. Start Your Strapi Server
```bash
cd portfolio-cms
npm run develop
```

### 2. Create Admin Account
- Navigate to `http://localhost:1337/admin`
- Create your first admin account
- Complete the setup process

### 3. Import Sample Data (Option A - Manual Entry)

#### **E-commerce Platform** (Featured Project)
- **Title**: E-commerce Platform
- **Description**: A full-featured e-commerce platform with user authentication, product management, inventory tracking, and secure payment integration using Stripe...
- **Technologies**: `["React", "Node.js", "MongoDB", "Stripe", "Express.js", "Redux"]`
- **Status**: Published
- **Featured**: ✅ Yes
- **Difficulty**: Advanced
- **Duration**: 3 months

#### **Social Media Dashboard**
- **Title**: Social Media Dashboard
- **Description**: A comprehensive dashboard for managing multiple social media accounts, scheduling posts, analyzing engagement metrics...
- **Technologies**: `["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL", "Socket.io"]`
- **Status**: Published
- **Difficulty**: Intermediate
- **Duration**: 2 months

#### **Personal Finance Tracker**
- **Title**: Personal Finance Tracker
- **Description**: A personal finance application for budgeting, expense tracking, and financial goal setting...
- **Technologies**: `["React", "Python", "Django", "PostgreSQL", "Chart.js", "Docker"]`
- **Status**: Published
- **Difficulty**: Intermediate
- **Duration**: 2.5 months

#### **Task Management API**
- **Title**: Task Management API
- **Description**: A RESTful API for task management with user authentication, project organization...
- **Technologies**: `["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Jest"]`
- **Status**: Published
- **Difficulty**: Intermediate
- **Duration**: 1.5 months

#### **Weather App**
- **Title**: Weather App
- **Description**: A mobile-responsive weather application that provides current weather conditions, forecasts...
- **Technologies**: `["React", "TypeScript", "OpenWeather API", "Tailwind CSS", "PWA", "Geolocation"]`
- **Status**: Published
- **Difficulty**: Beginner
- **Duration**: 1 month

### 4. Configure Permissions
1. Go to **Settings** → **Users & Permissions plugin** → **Roles**
2. Select **Public role**
3. Enable these permissions for **Projects**:
   - ✅ `find` - Allow public to view projects
   - ✅ `findOne` - Allow public to view individual projects
4. Click **Save**

### 5. Test Your API
Your Projects API will be available at:
```
http://localhost:1337/api/projects
```

## 🔧 Customization Options

### **Update Project Details**
- Change project titles, descriptions, and technologies
- Update links to point to your actual projects
- Modify difficulty levels and durations
- Add your own project images

### **Add More Projects**
- Use the same structure as the sample data
- Ensure all required fields are filled
- Set appropriate status (draft/published)
- Use meaningful slugs for SEO

### **Modify Schema** (Advanced)
- Edit `src/api/project/content-types/project/schema.json`
- Add new fields or modify existing ones
- Restart Strapi after schema changes

## 📱 Test Your Portfolio Integration

Once you have projects in Strapi:

1. **Update your portfolio website** to fetch from Strapi
2. **Add environment variables**:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```
3. **Test the dynamic loading** of projects

## 🎯 Sample Project Features

Each sample project demonstrates:
- **Realistic descriptions** with technical details
- **Proper technology arrays** for filtering
- **Varied difficulty levels** (beginner to advanced)
- **Different project types** (web-app, api)
- **Rich metadata** (challenges, learnings, tags)
- **Professional formatting** ready for portfolio display

## 🚨 Troubleshooting

### **Projects Not Appearing**
- Check if status is set to "Published"
- Verify permissions are configured correctly
- Ensure Strapi server is running

### **API Errors**
- Check browser console for error messages
- Verify the API endpoint URL
- Ensure CORS is configured if needed

### **Schema Issues**
- Restart Strapi after schema changes
- Check JSON syntax in schema file
- Verify field types match Strapi requirements

## 🎉 Next Steps

1. **Start Strapi** and import sample data
2. **Customize projects** with your information
3. **Test the API** endpoints
4. **Integrate with your portfolio** website
5. **Add real project images** and links

Your Strapi CMS is now ready with sample data to showcase your portfolio projects! 🚀
