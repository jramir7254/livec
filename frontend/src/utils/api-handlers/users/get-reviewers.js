import { API } from '@api/client.js'
import { logger } from '@utils/logger'

const log = logger.create('getReviewers.js');

export const getReviewers = async (id) => {
    try {
        log.debug("started")
        const response = await API.get(`/user/associate-editor/${id}/reviewers`)
        log.debug("done")

        const { reviewers } = response.data
        log.debug(reviewers)
        return reviewers
    } catch (error) {
        log.error(error)
    }
}