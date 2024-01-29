const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
const courses = [
    {id: 1, name: 'Course1'},
    {id: 2, name: 'Course2'},
    {id: 3, name: 'Course3'},
];
app.get('/', (req, res) => {
res.send('Hello World!!!');
});

app.get('/api/courses/', (req, res) => {
res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found!');
    res.send(course);
});

app.post('/api/courses', (req, res) =>{
    
    const { error } = validateCourse(req.body);
    if (error) return res.status(404).send(error.details[0].message);
// if(!req.body.name || req.body.name.length < 3){
//     //400
//     res.status(400).send('Name is required and should be minimum of 3 characters');
//     return;
// }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
    console.log(courses);
});

app.put('/api/courses/:id', (req,res) => {
    //Look for the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found!');
   
    //Validate
    const { error } = validateCourse(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    //Update course
    course.name = req.body.name;
    res.send(course);
    console.log(courses);
});
 app.delete('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found!');
   
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    console.log(courses);

    res.send(course);
 });

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}
//Set up the PORT from process environment
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

console.log(courses);