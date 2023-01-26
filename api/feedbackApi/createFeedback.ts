import axios from 'utils/axios';

import { FeedbackFormData } from 'entities/form';

const createFeedback = async (data: FeedbackFormData): Promise<null> => axios.post('/feedback', data);

export default createFeedback;
