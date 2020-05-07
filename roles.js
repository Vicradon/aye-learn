const AccessControl = require("accesscontrol");

let grantList = [
  { role: 'admin', resource: 'subject', action: 'create:any', attributes: '*' },
  { role: 'admin', resource: 'subject', action: 'update:any', attributes: '*' },
  { role: 'admin', resource: 'subject', action: 'delete:any', attributes: '*' },
  { role: 'admin', resource: 'category', action: 'update:any', attributes: '*' },
  { role: 'admin', resource: 'category', action: 'delete:any', attributes: '*' },
  { role: 'admin', resource: 'tutor', action: 'read:any', attributes: '*' },
  { role: 'admin', resource: 'tutor', action: 'update:any', attributes: '*' },
  { role: 'admin', resource: 'lesson', action: 'read:any', attributes: '*' },
  { role: 'admin', resource: 'lesson', action: 'update:any', attributes: '*' },
  { role: 'admin', resource: 'lesson', action: 'delete:any', attributes: '*' },
  { role: 'admin', resource: 'profile', action: 'read:any', attributes: '*' },
  // { role: 'admin', resource: 'category', action: 'read:any', attributes: '*' },
  // { role: 'admin', resource: 'subject', action: 'read:any', attributes: '*' },
  // { role: 'admin', resource: 'tutors', action: 'read:any', attributes: '*' },

  { role: 'tutor', resource: 'registered_subject', action: 'create:own', attributes: '*' },
  { role: 'tutor', resource: 'registered_subject', action: 'read:own', attributes: '*' },
  { role: 'tutor', resource: 'registered_subject', action: 'update:own', attributes: '*' },
  { role: 'tutor', resource: 'registered_subject', action: 'delete:own', attributes: '*' },
  // { role: 'tutor', resource: 'category', action: 'read:any', attributes: '*' },
  // { role: 'tutor', resource: 'subject', action: 'read:any', attributes: '*' },
  // { role: 'tutor', resource: 'tutors', action: 'read:any', attributes: '*' },
  { role: 'student', resource: 'profile', action: 'read:any', attributes: '*' },

  { role: 'student', resource: 'category', action: 'read:any', attributes: '*' },
  { role: 'student', resource: 'subject', action: 'read:any', attributes: '*' },
  { role: 'student', resource: 'tutor', action: 'read:any', attributes: '*' },
];
const ac = new AccessControl(grantList);

ac.grant('admin').extend('student');
ac.grant('tutor').extend('student');

module.exports = ac