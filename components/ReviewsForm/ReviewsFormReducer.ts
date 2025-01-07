export interface FormState {
  error: string | null;
  success: string | null;
}

type Action = { type: 'SET_ERROR'; payload: string } | { type: 'SET_SUCCESS'; payload: string } | { type: 'RESET' };

export const initialState: FormState = {
  error: null,
  success: null,
};

export const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'SET_ERROR':
      return { ...state, error: action.payload, success: null };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload, error: null };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
