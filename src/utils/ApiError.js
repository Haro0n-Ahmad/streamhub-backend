class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors= [],
        stack= ""
    )
    { 
        super(message)
        this.statusCode = statusCode
        this.error = error
        this.message= message
        this.statusCode = false
        this.errors = errors

        if (stack)
        {
            this.stack = stack
        }
        else {
           Error.captureStackTrace(this, this.constructor)
           
        }

    }
}

export default ApiError;