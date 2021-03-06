"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./src/core/core"));
// CustomEvent polyfill for IE9/10/11
(function () {
    if (typeof window === "undefined" || typeof window['CustomEvent'] === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window['Event'].prototype;
    window['CustomEvent'] = CustomEvent;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEMscUNBQXFDO0FBQ3JDLENBQUM7SUFFRyxFQUFFLENBQUMsQ0FBRSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVqRyxxQkFBdUIsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNoRCxHQUFHLENBQUMsZUFBZSxDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvY29yZSc7XG5cbi8vIEN1c3RvbUV2ZW50IHBvbHlmaWxsIGZvciBJRTkvMTAvMTFcbihmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHdpbmRvd1snQ3VzdG9tRXZlbnQnXSA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93WydFdmVudCddLnByb3RvdHlwZTtcblxuICAgIHdpbmRvd1snQ3VzdG9tRXZlbnQnXSA9IEN1c3RvbUV2ZW50O1xufSkoKTsiXX0=