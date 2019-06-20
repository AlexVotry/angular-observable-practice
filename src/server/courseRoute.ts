
import {dbData} from "./db-data";



export function courseRoute(req, res) {
    console.log('courseRoute:', req.body);

    const courseId = parseInt(req.params['id']) - 1;

    const course = dbData[courseId];

    res.status(200).json({
        "id": course.id,
        "url": course.url,
        "description": course.description
    });

}