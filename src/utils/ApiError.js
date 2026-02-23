class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went Wrong",
        errors= [],
        statck= ""
    )
    { 
        super(message)
        this.statusCode = statusCode
        this.error = error
        this.message= message
        this.statusCode = false
        this.errors = errors

        if (statck)
        {
            this.stack = statck
        }
        else {
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export default ApiError;