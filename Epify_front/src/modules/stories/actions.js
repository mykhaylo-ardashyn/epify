import { createAction } from "redux-actions";
import { apiRequest } from "../api/actions";

export const loadStoriesRequest = createAction("LOAD_STORIES_REQUEST");
export const loadStories = createAction("LOAD_STORIES");
export const loadStoriesFailed = createAction("LOAD_STORIES_FAILED");

export const loadstories = () => {
	return apiRequest({
		url: `/api/v1/stories`,
		force: true,
		update: {
			stories: (prev, next) => ({ ...next })
		}
	});
};