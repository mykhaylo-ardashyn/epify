export const getPendingRequests = state =>
  Object.values(state.queries).filter(({ meta, isPending }) => {
    if (
      (meta && meta.initiator !== undefined) ||
      (meta && meta.loaderEnabled === false)
    ) {
      return false;
    }
    return isPending;
  });

export const getPendingRequestsWithInitiator = (state, initiator) =>
  Object.values(state.queries).filter(
    ({ meta, isPending }) => isPending && (meta && meta.initiator) === initiator
  );
