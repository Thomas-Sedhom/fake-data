module.exports = {

    // not found function is made to detect wrong and invalid path
    notFound : (req, res, next) => {

        const error = new Error(`Not found ${req.originalUrl}`); // Error => is a class in js 

        res.status(404); // make status of request 404

        next(error); //send error variable to the next function

        res.render("courses")

    },

    resEror : (err, req, res, next) => {

        // هول حاجة بنشوف لو الحالة 404 بنسيبها زي ما هي لو لا وهو كدة كدة هيخش الفانشن دي لو فيه ايرور او 404 و طلما مش 404 فهنعمل الحالة 500

        let state

        if(res.statusCode != 404) state = 500;

        else state = 404;

        res.status(state).json({

            // هنا بنبعت في الصفحة سبب المشكلة و مكانها فين

            message: err.message,

            stack:process.env.NODE_ENV === "production" ? null : err.stack
        })
    }
}