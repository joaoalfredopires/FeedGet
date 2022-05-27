import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendEmailSpy }
)

describe('Submit feedback', () => {
    
    it('should be able to submit a feedback', async() => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo de comentário',
            screenshot: 'data:image/png;base64,auhsahsuasuasifaoifhqoifh4qoi4uqf',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    })

    it('should not to be able to submit feedback without type', async() => {
        
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo de comentário',
            screenshot: 'data:image/png;base64,auhsahsuasuasifaoifhqoifh4qoi4uqf',
        })).rejects.toThrow();
    })

    it('should not to be able to submit feedback without comment', async() => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,auhsahsuasuasifaoifhqoifh4qoi4uqf',
        })).rejects.toThrow();
    })

    it('should not to be able to submit feedback with invalid screenshot', async() => {
        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemplo de comentário',
            screenshot: 'test.png',
        })).rejects.toThrow();
    })
})