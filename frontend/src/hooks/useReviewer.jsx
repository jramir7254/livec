import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { UserContext } from '@context/UserProvider'
import { postLogin, postRegister } from '@utils/authHandler'
import { logger } from '@utils/logger'

export default function useReviewer() {
    const [reviewers, setReviewers] = useState([]);

useEffect(() => {
    
})

    return { formData, onFormChange, resetForm };
}
