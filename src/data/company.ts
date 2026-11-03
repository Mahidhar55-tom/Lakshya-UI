export const company = {
  name: 'Lakshya Software Technologies',
  shortName: 'Lakshya',
  description:
    'Lakshya Software Technologies is a technology-focused company delivering customized digital and enterprise solutions. Its focus includes software development, engineering, technology consulting, implementation, application support, testing, maintenance, and talent acquisition.',
  email: 'info@lakshya-soft.com',
  phone: '+91 00000 00000',
  address: 'Hyderabad, India',
  announcement: 'Technology innovation for resilient digital growth.',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'VLSI Engineering & Silicon Design', href: '/solutions/vlsi-engineering-silicon-design' },
      { label: 'Embedded Systems', href: '/solutions/embedded-systems' },
      { label: 'Internet of Things', href: '/solutions/iot' },
      { label: 'System Design Engineering', href: '/solutions/system-design-engineering' },
      { label: 'Automotive & Smart Solutions', href: '/solutions/automotive-smart-solutions' },
      { label: 'AI & Advanced Analytics', href: '/solutions/ai-advanced-analytics' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Software Development', href: '/services/software-development' },
      { label: 'ERP & CRM', href: '/services/erp-crm' },
      { label: 'Cloud Services', href: '/services/cloud-services' },
      { label: 'Business Process Management', href: '/services/business-process-management' },
      { label: 'Enterprise Performance Management', href: '/services/enterprise-performance-management' },
      { label: 'Human Capital Management', href: '/services/human-capital-management' },
      { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { label: 'System Assurance', href: '/services/system-assurance' },
      { label: 'Verification & Validation', href: '/services/verification-validation' },
      { label: 'Technical Consultancy', href: '/services/technical-consultancy' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export const solutionCatalog = [
  {
    slug: 'vlsi-engineering-silicon-design',
    title: 'VLSI Engineering & Silicon Design',
    summary: 'Silicon design, engineering, and semiconductor-related technology support for advanced hardware programs.',
    overview: 'Lakshya supports semiconductor and silicon engineering initiatives with disciplined design, validation, and engineering execution across complex programs.',
    capabilities: ['Silicon design', 'VLSI engineering', 'Design support', 'Semiconductor-focused engineering'],
  },
  {
    slug: 'embedded-systems',
    title: 'Embedded Systems',
    summary: 'Embedded software and hardware integration capabilities for robust, connected, and intelligent devices.',
    overview: 'Embedded systems solutions combine software engineering with hardware-aware design to deliver dependable performance in connected product environments.',
    capabilities: ['Embedded software', 'Integration', 'System reliability', 'Hardware-software coordination'],
  },
  {
    slug: 'iot',
    title: 'IoT',
    summary: 'Connected devices and integrated solutions for smarter operations across modern technology environments.',
    overview: 'Lakshya helps organizations design and implement connected product and infrastructure ecosystems that improve visibility and control.',
    capabilities: ['Connected devices', 'Device integration', 'Data workflows', 'System interoperability'],
  },
  {
    slug: 'system-design-engineering',
    title: 'System Design Engineering',
    summary: 'System architecture and engineering design that brings disparate technology components into a coherent solution.',
    overview: 'System design engineering focuses on robust architecture, design clarity, and technical alignment across complex product and enterprise programs.',
    capabilities: ['Architecture', 'Design engineering', 'Integration planning', 'System-level development'],
  },
  {
    slug: 'automotive-smart-solutions',
    title: 'Automotive & Smart Solutions',
    summary: 'Connected automotive and smart systems built to support modern mobility and intelligent operations.',
    overview: 'Lakshya works across automotive and smart solution domains with a focus on intelligence, connectivity, and engineering quality.',
    capabilities: ['Automotive technology', 'Smart systems', 'Connected solutions', 'Intelligent operations'],
  },
  {
    slug: 'ai-advanced-analytics',
    title: 'AI & Advanced Analytics',
    summary: 'AI-driven platforms, analytics, and decision-support systems designed to improve business insight and performance.',
    overview: 'The company supports organizations with AI, machine learning, and advanced analytics capabilities to convert information into action.',
    capabilities: ['AI', 'Machine learning', 'Analytics', 'Decision support'],
  },
];

export const serviceCatalog = [
  {
    slug: 'software-development',
    title: 'Software Development',
    summary: 'Custom software engineering and implementation across enterprise and product environments.',
    description: 'Lakshya develops custom software solutions aligned with business processes and technical requirements. These solutions are designed to be scalable, maintainable, and adaptable to specific operations.',
    capabilities: ['Custom software', 'Application engineering', 'Implementation', 'Business alignment'],
  },
  {
    slug: 'erp-crm',
    title: 'ERP & CRM',
    summary: 'Enterprise system implementation and support for operational visibility and customer engagement.',
    description: 'ERP and CRM services support core business functions, customer processes, reporting, and integrated operational workflows.',
    capabilities: ['ERP', 'CRM', 'System integration', 'Business processes'],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    summary: 'Cloud enablement and operational support to help businesses scale technology services more efficiently.',
    description: 'Cloud services help organizations optimize technology infrastructure and support resilient enterprise operations.',
    capabilities: ['Cloud strategy', 'Service enablement', 'Modern infrastructure', 'Operational resilience'],
  },
  {
    slug: 'business-process-management',
    title: 'Business Process Management',
    summary: 'Operational process improvement and transformation support for business efficiency.',
    description: 'BPM solutions help organizations review, align, and improve business processes for better performance and consistency.',
    capabilities: ['Process mapping', 'Optimization', 'Operational improvement', 'Workflow alignment'],
  },
  {
    slug: 'enterprise-performance-management',
    title: 'Enterprise Performance Management',
    summary: 'Performance frameworks and monitoring support for informed business decision-making.',
    description: 'Enterprise performance management helps organizations evaluate progress, align KPIs, and keep strategic initiatives on track.',
    capabilities: ['Performance planning', 'Monitoring', 'Management reporting', 'Decision support'],
  },
  {
    slug: 'human-capital-management',
    title: 'Human Capital Management',
    summary: 'People-focused systems and management support for workforce operations.',
    description: 'HCM capabilities support workforce planning, talent operations, and business process alignment across human capital functions.',
    capabilities: ['Workforce management', 'Talent operations', 'Process support', 'People systems'],
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    summary: 'Intelligent solutions and analytics services for modern business transformation.',
    description: 'AI and machine learning services help organizations explore intelligent automation, analytics, and insight-driven solutions.',
    capabilities: ['Artificial intelligence', 'Machine learning', 'Analytics', 'Automation'],
  },
  {
    slug: 'system-assurance',
    title: 'System Assurance',
    summary: 'Quality and assurance services for confidence in technology and system delivery.',
    description: 'System assurance focuses on governance, validation, and confidence-building across the lifecycle of technology platforms.',
    capabilities: ['Assurance', 'Reliability', 'Control', 'Quality checks'],
  },
  {
    slug: 'verification-validation',
    title: 'Verification & Validation',
    summary: 'Structured validation for technology correctness, quality, and risk reduction.',
    description: 'Verification and validation services help ensure systems meet functional and quality expectations before deployment or rollout.',
    capabilities: ['Verification', 'Validation', 'Quality control', 'Risk reduction'],
  },
  {
    slug: 'technical-consultancy',
    title: 'Technical Consultancy',
    summary: 'Specialized technology guidance for complex digital and engineering initiatives.',
    description: 'Technical consultancy provides engineering and business guidance across solution design, architecture, and technology strategy.',
    capabilities: ['Consulting', 'Technology strategy', 'Design guidance', 'Problem solving'],
  },
];

export const industryCatalog = [
  'Automotive',
  'Enterprise & Business Services',
  'Manufacturing',
  'Technology',
  'Education',
  'Public Sector',
];
