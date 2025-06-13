import { saveOpenAIKey } from '@/datas/slice/settings';
import { AppDispatch, RootState } from '@/datas/store/app';
import { OpenAIKey } from '@/interfaces/openAI';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useOpenAIKey = () : OpenAIKey => {
    const { openAI } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const value = openAI.key.value;
        if(!value || value === '') {
            (async () => {
                const key = await window.api.openAI.getKey();
                dispatch(saveOpenAIKey(key));
            })();
        }
    }, [openAI.key.value]);

    return openAI.key;
};

export default useOpenAIKey;
