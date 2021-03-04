import uuid from 'uuid';

export const addQuote = quote => {
    let id = uuid();
    return {
        type: 'ADD_QUOTE',
        quote: {id, ...quote}
    };
};


export const removeQuote = quoteId => {
    return { 
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

export const upvoteQuote = quoteId => ({ 
        type: 'UPVOTE_QUOTE',
        quoteId
    });


export const downvoteQuote = quoteId => ({
    type: 'DOWNVOTE_QUOTE',
    quoteId
})

